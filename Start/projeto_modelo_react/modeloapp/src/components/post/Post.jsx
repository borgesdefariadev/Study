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
          Acabei de adicionar mais uma arte no meu portifólio. É uma tattoo que
          fiz essa semana no estúdio. 🚀
        </p>

        <p>
          <a href="">👉 instagram.com/ricardoborgestattoo</a>
        </p>

        <p>
          <a href="">#tattoo</a> <a href="">#arte</a> <a href="">#blackwork</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário..." />

        <button type="submit">Publicar</button>
      </form>
    </article>
  );
}
