import { Fragment, ReactNode } from "react";

import styles from "./Modal.module.css";

type Props = {
  children: ReactNode;
  closeModal: () => void;
};

const Modal: React.FC<Props> = (props) => {
  const { closeModal, children } = props;
  return (
    <Fragment>
      <div onClick={closeModal} className={styles.backdrop}></div>
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </Fragment>
  );
};

export default Modal;
