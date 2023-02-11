import React from 'react';
import s from "./login.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {AuthInitialType, loginThunkCreator} from "../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

export type FormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
};

const Login = () => {
    const dispatch = useAppDispatch()
    const {isAuth, captchaUrl} = useAppSelector((state): AuthInitialType => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm<FormType>();
    const onSubmit: SubmitHandler<FormType> = data => dispatch(loginThunkCreator(data));
    if (isAuth) return <Navigate to='/profile'/>
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <label>
                    login:
                    <input {...register("email")} type={"email"}/>
                </label>
                <label>
                    password:
                    <input {...register("password", {required: true})} type={"password"}/>
                </label>
                {errors.password && <span>This field is required</span>}
                <label>
                    <input {...register("rememberMe")} type="checkbox"/>
                    remember me
                </label>
                <input type="submit" value={'Submit'} className={s.submit}/>
            </form>
            {captchaUrl && (
                <>
                    <img src={captchaUrl} alt="captcha"/>
                    <input {...register("captcha")} />
                </>
            )}
        </div>
    );
};

export default Login;