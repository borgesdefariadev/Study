import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Post } from "../../components/post/Post";

import "./../../styles/global.css/";
import styles from "./../../pages/Home/Home.module.css";

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}
