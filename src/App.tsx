import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css'

import { Header } from "./components/Header"
import { Post,PostType } from './components/Post'
import { SideBar } from './components/SideBar'
import "./global.css"

const posts:PostType[] = [ 
  {
    id:1,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/60237326?v=4',
      name:'Rafael Figueiredo',
      role: 'Dev'
    },
    content:[
     {type: 'paragraph', content:'Fala galeraa 👋'},

     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt:new Date('2022-05-03 20:00:00')
  },
  {
  id:2,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/47439116?v=4',
      name:'Miguel junior',
      role: 'Adm'
    },
    content:[
     {type: 'paragraph', content:'Fala galeraa 👋'},

     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

     {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt:new Date('2022-10-05 19:00:00')
  },

];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        
        <SideBar/>
        <main>
          {posts.map(post => {
              return(
                <Post
                key={post.id}
                post= {post}
                />
              )
          })}
        </main>
      </div>
      <ToastContainer />
      </div>
  )
  

  
}

export default App
