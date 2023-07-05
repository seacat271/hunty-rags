import { styled } from "styled-components";

import { Box } from "./Box";

export const StyledBox = styled(Box)`
  a {
    transition: color 300ms linear;
  }
  a:hover {
    color: ${(p) => (p.color === "red" ? "black" : "red")};
  }
`;
