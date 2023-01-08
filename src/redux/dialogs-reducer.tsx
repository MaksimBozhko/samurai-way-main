import React from 'react';
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';

type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

const InitialState: InitialStateType = {
    dialogs: [
        {id: v1(), name: 'Anton'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Aleksandr'},
    ],
    messages: [
        {id: v1(), message: 'hello!'},
        {id: v1(), message: 'how are you?'},
        {id: v1(), message: 'I\'m ok'},
    ]
}
const DialogsReducer = (state = InitialState, action: any) => {
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