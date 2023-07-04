import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { Box } from "../Box/Box";
import { FooterTitle } from "../FooterTitile/FooterTitle";
export const FooterAddress = () => {
  return (
    <Box as="div">
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
    </Box>
  );
};