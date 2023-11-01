import styled from "styled-components";
import { bodyColors, device } from "./global.jsx";

const ModalWrapper = styled.div`
  z-index: 3;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "all" : "none")};
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
const ModalContent = styled.div`
  padding: 20px;
  height: 100vh;
  overflow: auto;
  background-color: ${bodyColors.mainBlockBackgroundColor};
  transform: scale(${(props) => (props.active ? "1" : "0.1")});
  transition: all 0.2s ease-in-out;
  > div {
    max-width: 500px;
  }
  @media ${device.tablet} {
    height: auto;
  }
`;
const SvgClose = styled.div`
  max-width: 100% !important;
  text-align: right;
  > svg {
    font-size: 32px;
  }
`;

const ModalButtonsWrapper = styled.div`
  display: flex;
  max-width: 100% !important;
  > button {
    display: block;
    flex: 1 1;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.2em;
    background-color: ${bodyColors.activeLinkColor};
    transition: 0.2s ease-in-out;
    &:nth-child(even) {
      background-color: ${(props) =>
        props.active
          ? bodyColors.bodyBackgroundColor
          : bodyColors.activeLinkColor};
      color: ${(props) => (props.active ? "white" : "black")};
    }
    &:nth-child(odd) {
      background-color: ${(props) =>
        props.active
          ? bodyColors.activeLinkColor
          : bodyColors.bodyBackgroundColor};
      color: ${(props) => (props.active ? "black" : "white")};
    }
  }
`;

export { ModalWrapper, ModalContent, SvgClose, ModalButtonsWrapper };
