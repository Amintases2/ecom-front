import {bodyColors, HeadTitle} from "../styles/global.jsx";
import styled from "styled-components";


const Table = styled.table`
    width: auto;
    overflow: hidden;
    border-spacing: 0;
    width: 100%;
    border-collapse: collapse;
    > tbody, thead {
      width: 100%;
      > tr {
        width: 100%;

        margin-bottom: 10px;
        text-align: center;
        color: ${bodyColors.mainTextColor};
        background-color: ${bodyColors.mainBlockBackgroundColor};
        border-bottom: 2px ${bodyColors.bodyBackgroundColor} solid;
        > td {
          #flex: 1 1;
          padding: 15px 30px;
        }
      }
    }
  `;

export default function MyHistoryPage() {
    const headers = [
        "Id заказа",
        "Наименование",
        "Цена",
        "Дата покупки",
        "Статус",
    ];

    return (
        <>
            <HeadTitle>My orders</HeadTitle>
            <Table>
                <thead>
                <tr>
                    {headers.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#000001</td>
                        <td>Macbook Air 13</td>
                        <td>1$</td>
                        <td>12.10.2023</td>
                        <td>Активно</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
