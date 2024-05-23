import { ThumbsUp, Trash } from 'phosphor-react'
import stylesComment from './Comment.module.css'
import { Avatar } from './Avatar'


// content From Post
export const Comment = ({content, onDeleteComment}) => {
    function handleDeleteComment() {
      
      onDeleteComment(content);

      
    }
    



  return (
    <div className={stylesComment.comment} >
      <Avatar hasBorder={false} src="https://github.com/Wanchristersenn.png" />
    
      <div className={stylesComment.commentbox} >
          <div className={stylesComment.commentContent}>
              <header>
                <div className={stylesComment.authorAndTime}>
                  <strong>Wan</strong>
                  
                  <time title="03 De Maio Ás 17:02"dateTime='2024-03-05-16:00:00'>Cerca de 1h atrás</time>
                  </div>
          
                  <button onClick={handleDeleteComment} title='Deletar comentario'>
                  <Trash size={24}/>   
                  </button>

              </header>
              <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
          
        </footer>
      </div>
    
    </div>
    
  )
}