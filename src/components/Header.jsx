import styles from "./Header.module.css";

import sdaLogo from "../assets/sda-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={sdaLogo} alt="Logotipo do Servidor SDA" />
      <strong>SDA Feed</strong>
    </header>
  );
}
