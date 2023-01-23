import styles from "./Post.module.css";
import { useState } from "react";

export default function Post(props: { name: string; description: string }) {
  const { name, description } = props;

  return (
    <li className={styles.post}>
      <p className={styles.author}>{name}</p>
      <p className={styles.description}>{description}</p>
    </li>
  );
}
