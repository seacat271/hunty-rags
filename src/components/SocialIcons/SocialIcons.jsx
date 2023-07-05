import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTelegram,
} from "react-icons/fa6";
import { StyledBox } from "./SocialIcons.styled";
export const SocialIcons = () => {
  function MakeIconLink(...args) {
    const iconLink = [];
    [...args].map((item) => {
      item[0].href = item[1];
      iconLink.push(item[0]);
    });
    return iconLink;
  }
  const icons = MakeIconLink(
    [FaSquareFacebook, "http://www.facebook.com"],
    [FaSquareInstagram, "http://www.instagram.com"],
    [FaTelegram, "https://web.telegram.org/"]
  );
  console.log(icons);
  return (
    <StyledBox as="ul" display="flex">
      {icons.map((Icon) => {
        return (
          <li key={Icon.href}>
            <a href={Icon.href}>
              <Icon size={36} />
            </a>
          </li>
        );
      })}
    </StyledBox>
  );
};
