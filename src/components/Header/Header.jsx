import { Logo } from "../Logo/Logo";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { FilterHeader } from "../FilterHeader/FilterHeader";
import { Box } from "../Box/Box";

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      px={10}
    >
      <Logo />
      <Box>
        <SocialIcons />
        <FilterHeader />
      </Box>
    </Box>
  );
};
