import { useState } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../styles/Login";
export default function UserTr() {
  const [modalActive, setModalActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <tr onClick={() => setModalActive(true)}>
        <td>#1</td>
        <td>admin</td>
        <td>1</td>
        <td>0</td>
        <td>875$</td>
      </tr>
      <Modal active={modalActive} setActive={setModalActive}>
        <LoginForm>
          <div>
            <label>Скидка на все товары</label>
            <input
              {...register("username", { required: "Name is require!" })}
              type="number"
            />
            {errors.username && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </div>
          <div>
            <label>Дата пополнения</label>
            <input
              {...register("password", { required: "Password is require!" })}
              type="date"
            />
            {errors.password && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
          </div>
          <div>
            <input type="submit" value="Сохранить" />
          </div>
        </LoginForm>
      </Modal>
    </>
  );
}
