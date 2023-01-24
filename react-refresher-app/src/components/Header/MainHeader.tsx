import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./MainHeader.module.css";

type Props = {
  onShowModal: () => void;
};

export default function MainHeader(props: Props) {
  const { onShowModal } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={onShowModal}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}