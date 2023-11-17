import {LoginForm} from "../../styles/Login.jsx";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import UserServices from "../../../services/UserServices.jsx";
import SettingsServices from "../../../services/SettingsServices.jsx";

export default function SettingsForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({defaultValues:{
            global_discount:1
        }});

    const {data, isLoading, isError} =
        useQuery("settings", () =>
            SettingsServices.getSettings()
        );

    if(data){
        console.log(data)
    }

    return (
        <LoginForm>
            <div>
                <label>Скидка на все товары</label>
                <input
                    {...register("global_discount",  {required: "Name is require!"})}
                    type="number"
                />
                {errors.username && (
                    <p style={{color: "red"}}>This field is required</p>
                )}
            </div>
            <div>
                <label>Дата пополнения</label>
                <input
                    {...register("password", {required: "Password is require!"})}
                    type="date"
                />
                {errors.password && (
                    <p style={{color: "red"}}>This field is required</p>
                )}
            </div>
            <div>
                <input type="submit" value="Сохранить"/>
            </div>
        </LoginForm>
    )

}