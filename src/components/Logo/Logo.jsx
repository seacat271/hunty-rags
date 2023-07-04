import { Box } from "../Box/Box";
import LogoImage from "../../utility/Logo.jpeg";
export const Logo = () => {
  return (
    <Box>
      <img src={LogoImage} alt="logotype" />
    </Box>
  );
};
