import styled from "styled-components";
import { bodyColors, device } from "../styles/global.jsx";
import { NavLink } from "react-router-dom";

const Pages = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
  > a {
    padding: 8px 16px;
    margin: 2px;
    color: ${bodyColors.mainTextColor};
    text-decoration: none;
    background-color: ${bodyColors.mainBlockBackgroundColor};
  }
  @media ${device.laptop} {
    text-align: left;
  }
`;

export default function Pagination() {
  const left = "<";
  const right = ">";
  return (
    <Pages>
      <NavLink>{left}</NavLink>
      <NavLink>1</NavLink>
      <NavLink>2</NavLink>
      <NavLink>3</NavLink>
      <NavLink>{right}</NavLink>
    </Pages>
  );
}
