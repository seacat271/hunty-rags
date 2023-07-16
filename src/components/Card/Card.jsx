import { Box } from "../Box/Box";

export const Card = ({ item }) => {
  const { image, title, price } = item;
  return (
    <Box>
      <img src={image} alt={title} width="320" height="240" />
      <h5>{title}</h5>
      <p>{price}</p>
      <button type="button">Add to cart</button>
      <button type="button">To favorites</button>
      <button type="button">Compare</button>
    </Box>
  );
};
