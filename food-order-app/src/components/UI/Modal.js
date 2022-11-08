import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseCart} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalDestination
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDestination
      )}
    </Fragment>
  );
};

export default Modal;
