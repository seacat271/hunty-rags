import { GoodsList } from "../../utility/goodsList";
import { Card } from "../Card/Card";
export const CardsList = () => {
  return (
    <ul>
      {GoodsList.map((good) => {
        return (
          <li key={good.id}>
            <Card item={good} />
          </li>
        );
      })}
    </ul>
  );
};
