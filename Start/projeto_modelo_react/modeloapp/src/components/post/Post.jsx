import { Comments } from "../comments/Comments";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/borgesdefariadev.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ricardo Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="9 de Janeiro às 17:00" dateTime="2023-1-9 17:00:38">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de adicionar mais uma projeto no meu portifólio. É uma
          aplicação de saúde e bem estar que fiz em parceria com mais dois
          colaboradores. 🚀
        </p>
        <p>@devstecks</p>
        <p> @wallacecamarinha</p>
        <p>
          <a href="">👉 github.com/borgesdefariadev</a>
        </p>

        <p>
          <a href="">#programming</a> <a href="">#developer</a>{" "}
          <a href="">#technology</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário..." />

        <button type="submit">Publicar</button>
      </form>
      <div className={styles.commentList}>
        <Comments />
      </div>
    </article>
  );
}
