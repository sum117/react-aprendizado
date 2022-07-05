import styles from "./Sidebar.module.css";
import { GithubLogo } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="src\assets\sum117-bae.png" />
        <strong>João Caliman</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="https://github.com/sum117">
          <GithubLogo size={20} />
          Acesse meu Github
        </a>
      </footer>
    </aside>
  );
}
