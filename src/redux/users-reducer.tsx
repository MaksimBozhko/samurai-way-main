import React from 'react';
import {AppThunk} from "./redux-store";
import {usersAPI} from "../API/usersAPI";
import {followAPI} from "../API/followAPI";

export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    friends: Array<UserType>
}
export type UserType = {
    id: string
    followed: boolean
    name: string
    status?: string
    photos: any
}
export const initialState: UsersType = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    friends: [
        {
            name: "__d_zh__",
            id: '27613',
            photos: {
                small: null,
                large: null
            },
            followed: false
        },
        {
            name: "jenia321",
            id: '27612',
            photos: {
                "small": null,
                "large": null
            },
            followed: false
        },
        {
            name: "no1s9",
            id: '27611',
            photos: {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/27611/user-small.jpg?v=1",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/27611/user.jpg?v=1"
            },
            followed: false
        },
        {
            name: "noisy",
            id: '27610',
            photos: {
                "small": null,
                "large": null
            },
            followed: false
        },
    ]
}

const ProfileReducer = (state = initialState, action: usersMainType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
            }
        case 'SET_USERS':
            return {...state, users: [...action.payload.users]}
        case 'SET_TOTAL_USER_COUNT':
            return {...state, totalUserCount: action.payload.totalUsersCount}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
};

export type usersMainType = followACType | setUsersACType | setTotalUsersCountAType |
    setCurrentPageACType | setIsFetchingACType
type followACType = ReturnType<typeof followAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setTotalUsersCountAType = ReturnType<typeof setTotalUsersCountAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export const followAC = (userId: string) => ({type: 'FOLLOW', payload: {userId}} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', payload: {users}} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USER_COUNT', payload: {totalUsersCount}} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', payload: {currentPage}} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', payload: {isFetching}} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setIsFetchingAC(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalUsersCountAC(response.totalCount))
};
export const followThunkCreator = (followed: boolean, userId: string): AppThunk => async (dispatch) => {
    const response = followed ? await followAPI.unfollow(userId) : await followAPI.follow(userId)
    if (response.resultCode === 0) dispatch(followAC(userId))
};

export default ProfileReducer;