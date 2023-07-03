import { Logo } from "../Logo/Logo";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { FilterHeader } from "../FilterHeader/FilterHeader";

export const Header = () => {
  return (
    <header>
      <Logo />
      <SocialIcons />
      <FilterHeader />
    </header>
  );
};
