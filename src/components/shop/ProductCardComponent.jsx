import {Discount, DiscountWrapper, ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import UserServices from "../../../services/UserServices.jsx";
import ProductServices from "../../../services/ProductServices.jsx";
import OrderServices from "../../../services/OrderServices.jsx";
import {useNavigate} from "react-router";

export default function ProductCardComponent({product}) {
    const [modalActive, setModalActive] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const navigate = useNavigate();
    const handleClick = (productId, orderStatus) => {
        OrderServices.createOrder(productId, orderStatus)
        setModalActive(false)
        navigate('/my-history')


    }

    return (<ProductCard onClick={() => setModalActive(!modalActive)}>
        {product.discount > 0 && <DiscountWrapper>
            <Discount>{product.discount}%</Discount>
        </DiscountWrapper>}

        <img src={product.photo} alt=""/>
        <h2>{product.title}</h2>
        <Modal active={modalActive} setActive={setModalActive}>
            <ProductCard>
                <img src={product.photo} alt=""/>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </ProductCard>
            <ModalButtonsWrapper active={buttonActive}>
                <button onClick={() => handleClick(product.id, 2)} onMouseOver={() => setButtonActive(true)}>
                    Забронировать
                </button>
                <button onClick={() => handleClick(product.id, 1)} onMouseOver={() => setButtonActive(false)}>
                    Купить
                </button>
            </ModalButtonsWrapper>
        </Modal>
    </ProductCard>)
}