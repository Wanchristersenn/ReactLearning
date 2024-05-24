import { format, formatDistanceToNow } from "date-fns"

import { Comment } from "./Comment"
import stylepost from "./Post.module.css"
import { Avatar } from "./Avatar"
import { ptBR } from "date-fns/locale"
import { useState } from "react"

export const Post = ({ author, publisheDAT, content }) => {
  const [comments, setComments] = useState(["Post muito, bacana, hein?!"])

  const [newCommentText, setNewCommentText] = useState("")

  const publisheDateFormatted = format(
    publisheDAT,
    "d 'de' LLLL 'Ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publisheDateRelativeToNow = formatDistanceToNow(publisheDAT, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse Campo é obrrigatorio !")
  }
  
  

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

    

  return (
    <article className={stylepost.post}>
      <header>
        <div className={stylepost.author}>
          <Avatar src={author.avatarUrl} />

          <div className={stylepost.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.rule}</span>
          </div>
        </div>

        <time
          title={publisheDateFormatted}
          dateTime={publisheDAT.toISOString()}
        >
          {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={stylepost.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={stylepost.contentForm}>
        <strong>Deixe Seu FeedBack</strong>
        <textarea
          name="content"
          placeholder="Deixe Um Comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit"   disabled={newCommentText.length === 0} >
            Comentar
          </button>
        </footer>
      </form>
      <div className="styles.commentList">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} //function
            />
          )
        })}
      </div>
    </article>
  )
}
