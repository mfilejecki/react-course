import { ChangeEvent, useState } from "react";

import styles from "./NewPost.module.css";

type Props = {
  onAddPost: (data: { description: string; name: string }) => void;
  onCancel: () => void;
};

export default function NewPost(props: Props) {
  const [enteredDescription, setEnteredDescription] =
    useState("NextJs jest pogers");
  const [enteredName, setEnteredName] = useState("Marcel");

  const { onCancel, onAddPost } = props;

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
    const posterData = {
      description: enteredDescription,
      name: enteredName,
    };
    onAddPost(posterData);
    sendPost(posterData);
    onCancel();
  };

  return (
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}