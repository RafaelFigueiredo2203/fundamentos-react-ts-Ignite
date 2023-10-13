import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({content, onDeleteComment} : CommentProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/60237326?v=4" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Rafael Figueiredo</strong>
            <time title='11 de Maio as 08:01' dateTime='2022-05-11 08:01:03'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='excluir comentário'>
              <Trash size={20} />
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