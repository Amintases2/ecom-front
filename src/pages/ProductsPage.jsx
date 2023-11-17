import {HeadTitle} from "../styles/global.jsx";
import {Table, TableWrapper} from "../styles/Tables.jsx";
import ProductPhoto from "../assets/products/mac.png";
import {useRef} from "react";
import {Search} from "../components/SearchPanel.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import OrdersSelect from "../components/OrdersSelect.jsx";
import ProductTr from "../components/products/ProductTr.jsx";

export default function ProductsPage() {
    const headers = [
        "Id товара",
        "Image",
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
            <HeadTitle>Products</HeadTitle>
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
                    <AiOutlineSearch/>
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
                    <ProductTr/>
                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
}