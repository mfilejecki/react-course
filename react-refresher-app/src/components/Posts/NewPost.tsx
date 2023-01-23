import { useState, ChangeEvent } from "react";

import styles from "./NewPost.module.css";

export default function NewPost(props: {
  getDescription: (description: string) => void;
}) {
  const changeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    props.getDescription(event.target.value);
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}
