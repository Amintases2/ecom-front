import {Discount, DiscountWrapper, ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import ProductPhoto from "../../assets/products/mac.png";
import {LoginForm} from "../../styles/Login.jsx";
import {useForm} from "react-hook-form";

export default function ProductTr({product}) {
    const [modalActive, setModalActive] = useState(false);
    const [img, setImg] = useState(ProductPhoto);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const changeHandler = (e) => {
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        setImg(objectUrl);
    };

    return (
        <>
            <tr onClick={() => setModalActive(true)}>
                <td>#000001</td>
                <td>
                    <img width="200px" src={ProductPhoto} alt=""/>
                </td>
                <td>Macbook Air 13</td>
                <td>admin123</td>
                <td>1$</td>
                <td>12.10.2023</td>
                <td>{/* <OrdersSelect /> */}В заказе</td>
            </tr>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    <h3>
                        <span>В заказе</span>
                    </h3>
                    <div className="img-wrapper">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <LoginForm style={{height: "300px", overflow: "auto"}}>
                    <div>
                        <label>Название</label>
                        <input
                            {...register("username", {required: "Name is require!"})}
                            type="text"
                        />
                        {errors.username && (
                            <p style={{color: "red"}}>This field is required</p>
                        )}
                    </div>
                    <div>
                        <label>Описание</label>
                        <textarea
                            {...register("password", {required: "Password is require!"})}
                            type="date"
                        />
                        {errors.password && (
                            <p style={{color: "red"}}>This field is required</p>
                        )}
                    </div>
                    <div>
                        <label>Цена</label>
                        <input
                            {...register("username", {required: "Name is require!"})}
                            type="number"
                        />
                        {errors.username && (
                            <p style={{color: "red"}}>This field is required</p>
                        )}
                    </div>
                    <div>
                        <label>Скидка</label>
                        <input
                            {...register("username", {required: "Name is require!"})}
                            type="number"
                        />
                        {errors.username && (
                            <p style={{color: "red"}}>This field is required</p>
                        )}
                    </div>
                    <div>
                        <label>Картинка</label>
                        <input
                            {...register("file", {required: "Name is require!"})}
                            type="file"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.username && (
                            <p style={{color: "red"}}>This field is required</p>
                        )}
                    </div>
                    <div>
                        <input type="submit" value="Сохранить"/>
                    </div>
                </LoginForm>
            </Modal>
        </>
    );
}