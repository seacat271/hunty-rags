import { GoodsList } from "../../utility/goodsList";
import { Box } from "../Box/Box";
import { Card } from "../Card/Card";
export const CardsList = () => {
  return (
    <Box as="ul" display="flex">
      {GoodsList.map((good) => {
        return (
          <li key={good.id}>
            <Card item={good} />
          </li>
        );
      })}
    </Box>
  );
};
