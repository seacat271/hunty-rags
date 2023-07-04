import { Logo } from "../Logo/Logo";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { FilterHeader } from "../FilterHeader/FilterHeader";
import Box from "../Box/Box";

export const Header = () => {
  return (
    <Box as="header">
      <Logo />
      <SocialIcons />
      <FilterHeader />
    </Box>
  );
};
