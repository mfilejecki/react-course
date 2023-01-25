import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { modalActions } from "@/store/modalSlice";
import Modal from "../UI/Modal";

import styles from "./NewPost.module.css";

export default function NewPost() {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const closeModal = () => {
    dispatch(modalActions.closeModal);
    router.push("..");
  };

  const sendPost = async (data: { description: string; name: string }) => {
    const response = await fetch(
      "https://react-db887-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application-json",
        },
      }
    );

    if (!response.ok) {
      return;
    }

    console.log("Request sent!");
  };

  const changeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setEnteredDescription(event.target.value);
  };

  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const postData = {
      description: enteredDescription,
      name: enteredName,
    };
    sendPost(postData);
    closeModal();
  };

  return (
    <Modal onCloseModal={closeModal}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeTextHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNameHandler} />
        </p>
        <p className={styles.actions}>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
