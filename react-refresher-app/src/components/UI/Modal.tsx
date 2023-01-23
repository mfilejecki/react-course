import { Fragment, ReactNode } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: ReactNode;
  onCloseModal: () => void;
};

const Modal: React.FC<Props> = (props) => {
  const { onCloseModal, children } = props;
  return (
    <Fragment>
      <div onClick={onCloseModal} className={styles.backdrop}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </Fragment>
  );
};

export default Modal;
