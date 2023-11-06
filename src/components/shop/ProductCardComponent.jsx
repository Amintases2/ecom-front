import {Discount, DiscountWrapper, ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";

export default function ProductCardComponent({product}) {
    const [modalActive, setModalActive] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

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
                <button onMouseOver={() => setButtonActive(true)}>
                    Забронировать
                </button>
                <button onMouseOver={() => setButtonActive(false)}>Купить</button>
            </ModalButtonsWrapper>
        </Modal>
    </ProductCard>)
}