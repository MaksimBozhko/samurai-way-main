import React from 'react';
import {AppThunk} from "./redux-store";
import {FormType} from "../components/common/login/Login";
import {authAPI} from "../API/authAPI";
import {SecurityAPI} from "../API/securityAPI";

export const initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: ''
}
export type AuthInitialType = typeof initialState

const AuthReducer = (state = initialState, action: AuthMainType) => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'SET_CAPTCHA_URL':
            return {...state, ...action.payload}
        default:
            return state
    }
};

export type AuthMainType = setAuthUserDataACType | setCaptchaUrlACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
type setCaptchaUrlACType = ReturnType<typeof setCaptchaUrlAC>

export const setAuthUserDataAC = (id: string, email: string, login: string, isAuth: boolean) => {
    return {type: 'SET_USER_DATA', payload: {id, email, login, isAuth}} as const
}
export const setCaptchaUrlAC = (captchaUrl: string) => {
    return {type: 'SET_CAPTCHA_URL', payload: {captchaUrl}} as const
}

export const getAuthUserData = (): AppThunk => async (dispatch) => {
    const res = await authAPI.authMe()
    if (res.resultCode === 0) {
        const {id, email, login} = res.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
};
export const loginThunkCreator = (data: FormType): AppThunk => async (dispatch) => {
    const {email, password, rememberMe, captcha} = data
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.resultCode == 0) {
        dispatch(getAuthUserData())
    } else if (res.resultCode == 10) {
        dispatch(getCaptchaUrlThunkCreator())
    }
};
export const logoutThunkCreator = (): AppThunk => async (dispatch) => {
    const res = await authAPI.logaut()
    if (res.resultCode === 0) dispatch(setAuthUserDataAC('', '', '', false))
};
export const getCaptchaUrlThunkCreator = (): AppThunk => async (dispatch) => {
    const res = await SecurityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrlAC(res.url))
};

export default AuthReducer;