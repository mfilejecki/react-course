import styles from "./Post.module.css";
import { useState } from "react";

export default function Post(props: { name: string; description: string }) {
  const { name, description } = props;

  return (
    <li>
      <p>{name}</p>
      <p>{description}</p>
    </li>
  );
}
