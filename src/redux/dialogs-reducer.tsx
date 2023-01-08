import React from 'react';
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';

const DialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: v1(), message: action.message}
            state.messages = [...state.messages, newMessage]
            return state
        default:
            return state
    }
};

export const sendMessageAC = (message: string) => ({type: SEND_MESSAGE, message: message})


export default DialogsReducer;