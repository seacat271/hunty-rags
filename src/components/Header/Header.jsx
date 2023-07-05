import { FaUser } from "react-icons/fa6";
import { StyledBox } from "../Box/Box.styled";
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
      <Box display="flex">
        <Box mr={45}>
          <SocialIcons />
          <FilterHeader />
        </Box>
        <StyledBox mr={45} display="flex" alignItems="center" color="red">
          <a href="/login">
            <FaUser size={54} color={"inherit"} />
          </a>
        </StyledBox>
      </Box>
    </Box>
  );
};
