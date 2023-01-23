import { ReactNode } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: ReactNode;
};

const Modal: React.FC<Props> = (props) => {
  return <div className={styles.backdrop}>{props.children}</div>;
};

export default Modal;
