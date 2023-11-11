import { HeadTitle } from "../styles/global.jsx";
import { Table, TableWrapper } from "../styles/Tables.jsx";

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
      <TableWrapper>
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
      </TableWrapper>
    </>
  );
}
