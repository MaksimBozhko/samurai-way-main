import React from 'react';
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    messageText: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

const InitialState: DialogsPageType = {
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
    ],
    messageText: ''
}
const DialogsReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: v1(), message: action.message}
            state.messages = [...state.messages, newMessage]
            return state
        case NEW_MESSAGE_TEXT:
            state.messageText = action.text
            return state
        default:
            return state
    }
};

export const sendMessageAC = (message: string) => ({type: SEND_MESSAGE, message: message})
export const newMessageTextAC = (text: string) => ({type: NEW_MESSAGE_TEXT, text})

export default DialogsReducer;