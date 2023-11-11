import { AiOutlineSearch } from "react-icons/ai";
import { Search } from "../SearchPanel";
import { useRef } from "react";
import { HeadTitle } from "../../styles/global";
import { Table, TableWrapper } from "../../styles/Tables";
import UserTr from "./UserTr";

export default function UsersTable() {
  const page = useRef(1);
  const title = useRef("");

  const headers = ["User Id", "Username", "Limit", "Purchases", "Spent"];
  return (
    <>
      <HeadTitle>Users List</HeadTitle>
      <Search>
        <input
          onChange={(event) => (title.current = event.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={(event) => {
            page.current = 1;
            //refetch();
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
            <UserTr/>
            
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}
