import { Box } from "../../components/Box/Box";
import New_collection from "../../utility/new_collection_3.jpg";
import New_collection2 from "../../utility/new_collection_2.jpg";

export const HomePage = () => {
  const basis = "50%";

  return (
    <Box display="flex" flexWrap="wrap" maxWidth="1500">
      <img src={New_collection} alt="new collection" width={basis} />
      <img src={New_collection2} alt="new collection" width={basis} />
      <img src={New_collection} alt="new collection" width={basis} />
      <img src={New_collection2} alt="new collection" width={basis} />
      <img src={New_collection} alt="new collection" width={basis} />
      <img src={New_collection2} alt="new collection" width={basis} />
      <img src={New_collection} alt="new collection" width={basis} />
      <img src={New_collection2} alt="new collection" width={basis} />
    </Box>
  );
};
