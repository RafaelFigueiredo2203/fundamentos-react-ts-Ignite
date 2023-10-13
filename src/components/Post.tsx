
import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

interface Author {
  name:string;
  role:string;
  avatarUrl:string;
}

interface ContentProps {
  type:'paragraph' | 'link';
  content: string;
}

export interface PostType{
  id:number;
  author: Author;
  publishedAt:Date;
  content:ContentProps[];
}

interface PostProps{
  post:PostType
}



export function Post({post }: PostProps){


  const notify = () => toast.error('Por favor digite um comentário!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }); 

  const [comments,setComments] = useState([
      'Post muito bacana!'
  ])

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale:ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
    locale:ptBR,
    addSuffix:true
  })

  function handleCreateNewComment(event : FormEvent){
    if(newCommentText === ''){
      event.preventDefault()
      return notify();
     
    }else {

    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('');
    }
  }
  

  function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete : string){
    const commentsWithoutDeletedOne = comments.filter(comments => {
      return comments !== commentToDelete;

      
    })
    setComments(commentsWithoutDeletedOne);
  }
  
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}  />
      
        <div className={styles.authorInfo}>
          <strong>{post.author.name}</strong>
          <span>{post.author.role}</span>
        </div>
        </div>
        <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          post.content.map(line => {
            if(line.type === 'paragraph'){
              return <p key={line.content} >{line.content}</p>;
            }else if(line.type === 'link'){
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu FeedBack</strong>

        <textarea
        
        value={newCommentText} 
        onChange={handleNewCommentChange}
        name="comment"
        placeholder='Deixe um comentário '
        />

      <footer>
      <button type='submit'>Comentar</button>
      </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map(comment => {
        return <Comment 
        onDeleteComment={deleteComment}
        key={comment} content={comment}/>
       })}
      </div>

    </article>
  
  )
}