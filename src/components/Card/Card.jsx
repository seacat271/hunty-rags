import { useState } from "react";
import { Box } from "../Box/Box";
import { Image } from "./Card.styled";
import { Modal } from "../Modal/Modal";

export const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };
  const { image, title, price } = item;
  return (
    <Box padding="10px">
      <Image src={image} alt={title} width="320" height="240" />
      <Box as="h5" textAlign="center" mb="10px">
        {title}
      </Box>
      <Box as="p" textAlign="center">
        PRICE: {price}
      </Box>
      <Box as="button" type="button" mb="10px" onClick={toggleModal}>
        Add to cart
      </Box>
      <Box>
        <button type="button">To favorites</button>
        <button type="button">Compare</button>
      </Box>
      {showModal && (
        <Modal>
          <button onClick={toggleModal}>Close modal</button>
        </Modal>
      )}
    </Box>
  );
};
