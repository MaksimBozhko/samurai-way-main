import axios from "axios";
import {UserType} from "../redux/users-reducer";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '5a1b5a22-a9d1-4699-8edd-492dfa5d8d7f'
    }
})

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}> = {
    data: D
    messages: Array<string>
    resultCode: number
}