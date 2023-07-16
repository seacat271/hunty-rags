import { ModalContent, ModalBackdrop } from "./Modal.styled";

export const Modal = ({ children }) => {
  return (
    <ModalBackdrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>
  );
};
