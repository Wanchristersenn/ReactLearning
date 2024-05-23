import {Avatar} from './Avatar'
import stylessidebar from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
export const Sidebar = ()=>{
  return (
    <aside className={stylessidebar.sidebar}>
      <img className={stylessidebar.cover}
       src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
      />

      <div className={stylessidebar.profile}>
        <Avatar  src="https://github.com/Wanchristersenn.png"/>

        <strong>Wan Victtor</strong>
        <span>Full Stack Developer</span>
      </div>
      
      <footer className={stylessidebar.footer}>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
          </a>
      
      </footer>
    
    </aside>
  )
}