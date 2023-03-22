import React from 'react';
import {v1} from "uuid";
import {ActionsTypes, AppThunk} from "./redux-store";
import {DescriptionFormType} from "../components/Profile/ProfileInfo/description/DescriptionForm";
import {profileAPI} from "../API/profileAPI";

export type ProfilePageType = {
    posts: Array<PostPropsType>
    postText: string
    profile: ProfileType
    status: string
}
export type ProfileType = {
    userId: number
    aboutMe: string
    contacts: any
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: PhotosType
}
export type PhotosType = {
    small: string
    large: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'HI!!!', likesCount: 10},
        {id: v1(), message: 'hello', likesCount: 20},
    ],
    postText: '',
    profile: {} as ProfileType,
    status: ''
}

const ProfileReducer = (state = initialState, action: profileMainType) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {id: v1(), message: state.postText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts]}
        case 'NEW_POST_TEXT':
            return {...state, postText: action.payload.text}
        case 'SET_PROFILE':
            return {...state, profile: action.payload.profile}
        case 'SET_STATUS':
            return {...state, status: action.payload.status}
        case 'SAVE_PHOTO':
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        default:
            return state
    }
};

// export type profileMainType = addPostACType | newPostTextACType | setProfileACType | setStatusACType | savePhotoACType
// type addPostACType = ReturnType<typeof addPostAC>
// type newPostTextACType = ReturnType<typeof newPostTextAC>
// type setProfileACType = ReturnType<typeof setProfileAC>
// type setStatusACType = ReturnType<typeof setStatusAC>
// type savePhotoACType = ReturnType<typeof savePhotoAC>

// export const addPostAC = () => ({type: 'ADD_POST'} as const)
// export const newPostTextAC = (text: string) => ({type: 'NEW_POST_TEXT', payload: {text}} as const)
// export const setProfileAC = (profile: any) => ({type: 'SET_PROFILE', payload: {profile}} as const)
// export const setStatusAC = (status: string) => ({type: 'SET_STATUS', payload: {status}} as const)
// export const savePhotoAC = (photo: string) => ({type: 'SAVE_PHOTO', payload: {photo}} as const)

export type profileMainType = ActionsTypes<typeof actions>

export const actions = {
    addPostAC: () => ({type: 'ADD_POST'} as const),
    newPostTextAC: (text: string) => ({type: 'NEW_POST_TEXT', payload: {text}} as const),
    setProfileAC: (profile: any) => ({type: 'SET_PROFILE', payload: {profile}} as const),
    setStatusAC: (status: string) => ({type: 'SET_STATUS', payload: {status}} as const),
    savePhotoAC: (photos: PhotosType) => ({type: 'SAVE_PHOTO', payload: {photos}} as const)
}

export const getProfileThunkCreator = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(actions.setProfileAC(response))
};
export const getStatusThunkCreator = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatusAC(response))
};

export const updateStatusThunkCreator = (statusInput: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.updateStatus(statusInput)
    if (response.data.resultCode === 0) {
        dispatch(actions.setStatusAC(statusInput))
    }
};

export const savePhotoThunkCreator = (photo: any): AppThunk => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.resultCode === 0) {
        dispatch(actions.savePhotoAC(response.data.photos))
    }
};

export const saveProfileThunkCreator = (profile: DescriptionFormType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id
    const res = await profileAPI.saveProfile(profile)
    if (res.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId))
    }
};

export default ProfileReducer;