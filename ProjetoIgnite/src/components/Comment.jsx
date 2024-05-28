import { ThumbsUp, Trash } from 'phosphor-react'
import stylesComment from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from "react"
import { subMinutes } from 'date-fns'



// content From Post
export const Comment = ({content, onDeleteComment}) => {
  const [likeCount, setLikeCount] =  useState(0);  

  
  function handleDeleteComment() {
      
      onDeleteComment(content);

      
    }
    
    function handleLikeComment() {
      setLikeCount((state) => {
        return state + 1
      })
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
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
          
        </footer>
      </div>
    
    </div>
    
  )
}

 