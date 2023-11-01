import { HeadTitle } from "../styles/global.jsx";

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
      <table>
        <thead>
          <tr>
            {headers.map((title)=> (<td>{title}</td>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
