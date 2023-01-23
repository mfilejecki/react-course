import { ChangeEvent } from "react";

import styles from "./NewPost.module.css";

type Props = {
  onDescriptionChange: (description: string) => void;
  onNameChange: (name: string) => void;
};

export default function NewPost(props: Props) {
  const changeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    props.onDescriptionChange(event.target.value);
  };

  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onNameChange(event.target.value);
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
    </form>
  );
}
