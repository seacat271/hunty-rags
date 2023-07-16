import { Box } from "../Box/Box";
import { Image } from "./Card.styled";

export const Card = ({ item }) => {
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
      <Box as="button" type="button" mb="10px">
        Add to cart
      </Box>
      <Box>
        <button type="button">To favorites</button>
        <button type="button">Compare</button>
      </Box>
    </Box>
  );
};
