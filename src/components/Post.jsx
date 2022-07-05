import styles from './Post.module.css'
const postedAt = () => {
    const date = Date.now()
    const dateObj = new Date(date)
    const timeSince = date - dateObj.getTime()
    const localeString = dateObj.toLocaleDateString()
    return {
        rawDateObj: dateObj, 
        timeSince: timeSince, 
        localeDateString: localeString
    }
}
export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="src\assets\sum117-bae.png"/>
                    <div className={styles.authorInfo}>
                        <strong>João Caliman</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title={postedAt().localeDateString}
                    dateTime={postedAt().rawDateObj}
                >
                    Publicado há {postedAt().timeSince} milisegundos
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal, tudo bem?!</p>
                <p>Bem vindo ao meu portfolio!</p>
                <p>
                    ➡️{' '}<a href="">Você pode acessar as minhas referências aqui!</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Quer me mandar uma mensagem?</strong>

                <textarea
                    placeholder="Deixe seu comentário aqui!"
                />
            <footer>
                <button type="submit">Enviar</button>
            </footer>

            </form>
        </article>
    )
}