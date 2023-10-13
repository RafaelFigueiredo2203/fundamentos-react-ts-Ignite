import { PencilLine } from 'phosphor-react';
import styles from './SideBar.module.css';
import { Avatar } from './Avatar';

export function SideBar(){
  return (
    <aside className={styles.container}>

        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  />

        <div className={styles.profile}>

            <Avatar src="https://avatars.githubusercontent.com/u/60237326?v=4" />
            <strong>Rafael Figueiredo</strong>
            <span>Full Stack Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar perfil 
          </a>
        </footer>
      </aside>
  )
}