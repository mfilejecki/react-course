import Post from "./Post";
import styles from "./PostList.module.css";

export default function PostList(props: { description: string; name: string }) {
  const { name, description } = props;

  return (
    <ul className={styles.posts}>
      <Post name={name} description={description} />
    </ul>
  );
}
