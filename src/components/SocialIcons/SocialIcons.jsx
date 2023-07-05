import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTelegram,
} from "react-icons/fa6";
import { StyledBox } from "./SocialIcons.styled";
export const SocialIcons = () => {
  const icons = [FaSquareFacebook, FaSquareInstagram, FaTelegram];

  return (
    <StyledBox as="ul" display="flex">
      {icons.map((Icon) => {
        return (
          <li>
            <a>
              <Icon size={36} />
            </a>
          </li>
        );
      })}
    </StyledBox>
  );
};
