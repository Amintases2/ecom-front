import { HeadTitle } from "../styles/global.jsx";
import { SettingsWrapper } from "../styles/Settings.jsx";
import Diagram from "../components/settings/Diagram.jsx";
import { useForm } from "react-hook-form";
import { LoginForm } from "../styles/Login.jsx";
import { useRef } from "react";
import UsersTable from "../components/settings/UsersTable.jsx";

export default function SettingsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <HeadTitle>Settings</HeadTitle>
      <SettingsWrapper>
        <div>
          <Diagram />
        </div>
        <div>
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
        </div>
      </SettingsWrapper>
      <UsersTable />
    </>
  );
}
