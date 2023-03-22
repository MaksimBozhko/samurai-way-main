import React from 'react';
import {AppThunk} from "./redux-store";
import {usersAPI} from "../API/usersAPI";
import {followAPI} from "../API/followAPI";


export const initialState = {
    users: [] as UserType[],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    friends: [] as UserType[],
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const ProfileReducer = (state: UsersType = initialState, action: usersMainType) => {
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
        case 'SET_FILTER':
            return {...state, filter: action.payload}
        case 'SET_FRIENDS':
            return {...state, friends: action.payload}
        default:
            return state
    }
};

//action creator
export const followAC = (userId: string) => ({type: 'FOLLOW', payload: {userId}} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', payload: {users}} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USER_COUNT', payload: {totalUsersCount}} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', payload: {currentPage}} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', payload: {isFetching}} as const)
export const setFilterAC = (filter: FormType) => ({type: 'SET_FILTER', payload: filter} as const)
export const setFriendsAC = (friends: UserType[]) => ({type: 'SET_FRIENDS', payload: friends} as const)

//thunk
export const getUsersThunkCreator = (currentPage: number, pageSize: number, term: string, friend: FriendType): AppThunk => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setIsFetchingAC(true))
    dispatch(setFilterAC({term, friend}))
    const response = await usersAPI.getUsers(currentPage, pageSize, term, friend)
    dispatch(setIsFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalUsersCountAC(response.totalCount))
};
export const followThunkCreator = (followed: boolean, userId: string): AppThunk => async (dispatch) => {
    const response = followed ? await followAPI.unfollow(userId) : await followAPI.follow(userId)
    if (response.resultCode === 0) dispatch(followAC(userId))
};
export const getFriendsThunkCreator = (): AppThunk => async (dispatch) => {
    const response = await usersAPI.getFriends()
    dispatch(setFriendsAC(response.items))
};


//types
export type UsersType = {
    users:  UserType[]
    friends:  UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    filter: {
        term: string
        friend: FriendType
    }
}
export type UserType = {
    id: string
    followed: boolean
    name: string
    status?: string
    photos: UserPhotosType
}
export type UserPhotosType = {small: string, large: string}
export type FriendType = null | boolean
type initialStateType = typeof initialState
export type FormType = typeof initialState.filter
//actions type
export type usersMainType = followACType | setUsersACType | setTotalUsersCountAType |
    setCurrentPageACType | setIsFetchingACType | setFilterACType | setFriendsACType
type followACType = ReturnType<typeof followAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setTotalUsersCountAType = ReturnType<typeof setTotalUsersCountAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>
type setFilterACType = ReturnType<typeof setFilterAC>
type setFriendsACType = ReturnType<typeof setFriendsAC>


export default ProfileReducer;