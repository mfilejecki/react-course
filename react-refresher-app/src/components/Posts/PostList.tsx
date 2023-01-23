import Post from "./Post";
import styles from "./PostList.module.css";

export default function PostList(props: { description: string }) {
  return (
    <ul className={styles.posts}>
      <Post name={"Marcel"} description={props.description} />
    </ul>
  );
}
