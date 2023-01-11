import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";

export function Comments() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/stecks10.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Nunes</strong>
              <time title="9 de Janeiro às 17:00" dateTime="2023-1-9 17:00:38">
                há 1h.
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom dog, Parabéns!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
