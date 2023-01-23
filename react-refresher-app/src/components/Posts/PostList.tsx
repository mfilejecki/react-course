import { Fragment, useState } from "react";

import Post from "./Post";
import Modal from "../UI/Modal";
import NewPost from "./NewPost";

import styles from "./PostList.module.css";

type Props = {
  isPosting: boolean;
  closeModal: () => void;
};

export default function PostList(props: Props) {
  const [enteredDescription, setEnteredDescription] =
    useState("NextJs jest pogers");
  const [enteredName, setEnteredName] = useState("Marcel");

  const { isPosting, closeModal } = props;

  const descriptionChangeHandler = (description: string) => {
    setEnteredDescription(description);
  };

  const nameChangeHandler = (name: string) => {
    setEnteredName(name);
  };

  return (
    <Fragment>
      {isPosting && (
        <Modal onCloseModal={closeModal}>
          <NewPost
            onDescriptionChange={descriptionChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post name={enteredName} description={enteredDescription} />
      </ul>
    </Fragment>
  );
}
