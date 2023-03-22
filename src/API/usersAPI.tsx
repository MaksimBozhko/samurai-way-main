import {GetItemsType, instance} from "./api";
import {FriendType} from '../redux/users-reducer';

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string, friend: FriendType) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(res => res.data)
    },
    getFriends() {
        return instance.get<GetItemsType>(`users?friend=true`)
            .then(res => res.data)
    },
}