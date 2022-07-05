import { useState } from "react";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sum117"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo saepe minima sint corporis non voluptatem tempore magnam eligendi voluptatibus beatae harum magni cumque asperiores quibusdam enim error, dolor corrupti dolores."
          />
        </main>
      </div>
    </div>
  );
}
