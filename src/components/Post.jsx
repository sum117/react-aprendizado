import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { formatDate } from '../main';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  const date = formatDate(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={date.raw} dateTime={date.iso}>
          {date.relative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>;
          else if (line.type === 'link')
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            );
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Quer me mandar uma mensagem?</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentário aqui!"
        />
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  );

  function handleNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }
}
