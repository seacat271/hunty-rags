import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { StyledBox } from "../Box/Box.styled";
import { FooterTitle } from "../FooterTitile/FooterTitle";
import { SocialIcons } from "../SocialIcons/SocialIcons";
export const FooterAddress = () => {
  return (
    <StyledBox as="div">
      <FooterTitle title={"CONTACTS"} />
      <address>
        <ul>
          <li>
            <a href="https://goo.gl/maps/aA86Dh76K2qKcj5f8">
              <FaLocationDot />
              04210, Kyiv city, Ivasyuka avenu
            </a>
          </li>
          <li>
            <a href="tel:+38(097)536-98-78">
              <FaPhoneVolume />
              +38(097)536-98-78
            </a>
          </li>
          <li>
            <a href="mailto:hunty_rugs@mail.net">
              <FaEnvelope />
              hunty_rugs@mail.net
            </a>
          </li>
        </ul>
      </address>
      <SocialIcons />
    </StyledBox>
  );
};
