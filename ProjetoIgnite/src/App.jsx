import "./global.css"
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import styleapp from "./App.module.css"
import { Sidebar } from "./components/Sidebar"


const posts =[
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/Wanchristersenn.png',
      name:'wanchristersenn',
      rule:'Front-End Developer'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 👉 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}
    ],
    publisheDAT: new Date ('2024-05-11 16:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/129100238?v=4',
      name:'Yan',
      rule:'Front-End Developer'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 👉 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}
    ],
    publisheDAT: new Date ('2024-05-16 16:00:00')
  },
]
function App() {
  return (
    <>
      <Header />
      
      <div className={styleapp.wrapper}>
      <Sidebar/>
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publisheDAT={post.publisheDAT}
            />
          )
        })}
        </main>
      </div>
     
    </>
  )
}

export default App
