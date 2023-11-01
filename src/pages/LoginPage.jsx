import {useForm} from "react-hook-form";
import {LoginWrapper, LoginForm, CheckBoxWrapper} from "../styles/Login.jsx";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import UserServices from "../../services/UserServices.jsx";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        console.log(await UserServices.authUser(data))
    };
    return (
        <LoginWrapper>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <h2>ACCOUNT LOGIN</h2>
                <div>
                    <label>Username</label>
                    <input
                        {...register("username", {required: "Name is require!"})}
                        type="text"
                    />
                    {errors.username && (
                        <p style={{color: "red"}}>This field is required</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        {...register("password", {required: "Password is require!"})}
                        type="text"
                    />
                    {errors.password && (
                        <p style={{color: "red"}}>This field is required</p>
                    )}
                </div>
                <CheckBoxWrapper>
                    <input {...register("remember")} type="checkbox"/>
                    <span>Remember me</span>
                </CheckBoxWrapper>
                <div>
                    <input type="submit" value="Вход"/>
                </div>
            </LoginForm>
        </LoginWrapper>
    );
}
