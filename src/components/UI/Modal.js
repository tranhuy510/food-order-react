import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return <div className={styles.modal}>{props.children}</div>;
}

const overlayElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </React.Fragment>
  );
}
