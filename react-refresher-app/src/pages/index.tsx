import { Fragment, useState } from "react";

import PostList from "@/components/Posts/PostList";
import NewPost from "@/components/Posts/NewPost";

import Modal from "../components/UI/Modal";

export default function HomePage() {
  const [enteredDescription, setEnteredDescription] =
    useState("NextJs jest pogers");
  const [enteredName, setEnteredName] = useState("Marcel");

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const descriptionChangeHandler = (description: string) => {
    setEnteredDescription(description);
  };

  const nameChangeHandler = (name: string) => {
    setEnteredName(name);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <Fragment>
      {modalIsOpen && (
        <Modal closeModal={closeModalHandler}>
          <NewPost
            onDescriptionChange={descriptionChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}
      <PostList description={enteredDescription} name={enteredName} />
    </Fragment>
  );
}
