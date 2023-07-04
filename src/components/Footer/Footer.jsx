import { Box } from "../Box/Box";
import { FooterAddress } from "../FooterAdress/FooterAdress";
import { SocialIcons } from "../SocialIcons/SocialIcons";
export const Footer = () => {
  return (
    <Box as="footer" bg="white">
      <FooterAddress />
      <SocialIcons />
    </Box>
  );
};
