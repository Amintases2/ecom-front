import styled from "styled-components";
import { bodyColors } from "../styles/global.jsx";
import { AiOutlineSearch } from "react-icons/ai";

const Search = styled.div`
  margin: 10px;
  display: flex;

  > input {
    padding: 10px;
    background-color: ${bodyColors.mainBlockBackgroundColor};
    color: ${bodyColors.mainTextColor};
    border: none;
    font-size: 1.2em;
    width: 100%;
    outline: none;
  }
  > button {
    cursor: pointer;
    background-color: ${bodyColors.mainBlockBackgroundColor};
    color: ${bodyColors.semiTextColor};
    padding: 5px;
    border: none;
    display: flex;
    align-items: center;

    > svg {
      transition: 0.2s ease-in-out;
      font-size: 30px;
    }
    &:hover {
      > svg {
        transform: scale(1.2);
      }
    }
  }
`;

export default function SearchPanel() {
  return (
    <>
      <Search>
        <input type="text" placeholder="Search..." />
        <button>
          <AiOutlineSearch />
        </button>
      </Search>
    </>
  );
}
