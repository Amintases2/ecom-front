import { HeadTitle } from "../styles/global.jsx";
import { Table, TableWrapper } from "../styles/Tables.jsx";

import { useRef } from "react";
import { Search } from "../components/SearchPanel.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import OrdersSelect from "../components/OrdersSelect.jsx";

export default function OrdersPage() {
  const headers = [
    "Id заказа",
    "Наименование",
    "Пользователь",
    "Цена",
    "Дата заявки",
    "Статус",
  ];
  const page = useRef(1);
  const title = useRef("");

  return (
    <>
      <HeadTitle>Orders</HeadTitle>
      <Search>
        <input
          onChange={(event) => (title.current = event.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={(event) => {
            page.current = 1;
            // refetch();
            event.preventDefault();
          }}
        >
          <AiOutlineSearch />
        </button>
      </Search>
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
              <td>admin123</td>
              <td>1$</td>
              <td>12.10.2023</td>
              <td>
                <OrdersSelect />
              </td>
            </tr>
            <tr>
              <td>#000001</td>
              <td>Macbook Air 13</td>
              <td>admin123</td>
              <td>1$</td>
              <td>12.10.2023</td>
              <td>
                <OrdersSelect />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}
