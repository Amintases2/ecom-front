import { bodyColors, HeadTitle } from "../styles/global.jsx";
import { Table, TableWrapper } from "../styles/Tables.jsx";

// import { Doughnut } from "react-chartjs-2";

import { useRef } from "react";
import { Search } from "../components/SearchPanel.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import OrdersSelect from "../components/OrdersSelect.jsx";

import { styled } from "styled-components";

const SettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex: 1 1 40%;
    background-color: ${bodyColors.mainBlockBackgroundColor};
    padding: 10px;
    margin: 10px;
  }
`;

export default function SettingsPage() {
  return (
    <>
      <HeadTitle>Settings</HeadTitle>
      <SettingsWrapper>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SettingsWrapper>
    </>
  );
}
