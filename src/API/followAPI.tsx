import {instance, ResponseType} from "./api";

export const followAPI = {
    follow(userId: string) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    }
}