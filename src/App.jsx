import { useState } from "react";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'src/assets/sum117-bae.png',
      name: 'João Caliman',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal, tudo bem?!'},
      {type: 'paragraph', content: 'Bem vindo ao meu portfolio!'},
      {type:'link', content: '➡️ Você pode acessar as minhas referências aqui!'}
    ],
    publishedAt: new Date('2022-07-05 18:40:00')
  },
]

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
