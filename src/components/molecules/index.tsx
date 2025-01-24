import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById("modal")!
  );
}

export default Modal;
