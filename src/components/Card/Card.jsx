import { Box } from "../Box/Box";

export const Card = ({ item }) => {
  const { image, title, price } = item;
  return (
    <Box padding="10px">
      <img src={image} alt={title} width="320" height="240" />
      <Box as="h5" textAlign="center">
        {title}
      </Box>
      <p>{price}</p>
      <Box as="button" type="button" textAlign="center">
        Add to cart
      </Box>
      <Box>
        <button type="button">To favorites</button>
        <button type="button">Compare</button>
      </Box>
    </Box>
  );
};
