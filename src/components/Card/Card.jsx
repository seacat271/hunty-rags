import { Box } from "../Box/Box";

export const Card = () => {
  return (
    <Box>
      <img src="" alt="product name" width="320" />
      <h5>Product name</h5>
      <p>price</p>
      <button type="button">Add to cart</button>
      <button type="button">To favorites</button>
      <button type="button">Compare</button>
    </Box>
  );
};
