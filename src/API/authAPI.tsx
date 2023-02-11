import {instance, ResponseType} from "./api";

type MeResponseType = {
        id: string
        email: string
        login: string
}
type LoginType = {
        userId: number
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<MeResponseType>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha = '') {
        return instance.post<ResponseType<LoginType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logaut() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    },
}