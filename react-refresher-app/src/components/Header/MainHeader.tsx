import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { modalActions } from "@/store/modalSlice";

import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  const router = useRouter();
  const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen);
  const dispatch = useDispatch();
  const showModalHandler = () => {
    router.push("/new-post");
    dispatch(modalActions.openModal());
    console.log(modalIsOpen);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={styles.button} onClick={showModalHandler}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
