import React from 'react';
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';

type InitialStateType = {
    posts: Array<PostPropsType>
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
    ]
}

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.message, likesCount: 0}
            state.posts = [...state.posts, newPost]
            return state
        default:
            return state
    }
};

export const addPostAC = (title: string) => ({type: ADD_POST, message: title})


export default ProfileReducer;