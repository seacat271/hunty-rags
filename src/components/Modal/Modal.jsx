import { createPortal } from "react-dom";

import { ModalContent, ModalBackdrop } from "./Modal.styled";
const modalRoot = document.querySelector("#modal-root");
export const Modal = ({ children }) => {
  return createPortal(
    <ModalBackdrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
