import React from 'react';
import {v1} from "uuid";

const ADD_POST = 'ADD_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT';

type InitialStateType = {
    posts: Array<PostPropsType>
    postText: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'HI!!!', likesCount: 10},
        {id: v1(), message: 'hello', likesCount: 20},
    ],
    postText: ''
}

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: state.postText, likesCount: 0}
            state.posts = [...state.posts, newPost]
            state.postText = ''
            return state
        case NEW_POST_TEXT:
            state.postText = action.text

            return state
        default:
            return state
    }
};

export const addPostAC = () => ({type: ADD_POST})
export const newPostTextAC = (text: string) => ({type: NEW_POST_TEXT, text})


export default ProfileReducer;