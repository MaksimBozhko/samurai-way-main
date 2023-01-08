import React from 'react';
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';

const ProfileReducer = (state: any, action: any) => {
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