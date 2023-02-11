import React from 'react';
import {v1} from "uuid";

const InitialState = {
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
export type DialogsPageType = typeof InitialState

const DialogsReducer = (state = InitialState, action: dialogsMainType) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const newMessage = {id: v1(), message: action.payload.message}
            state.messages = [...state.messages, newMessage]
            return state
        case 'NEW_MESSAGE_TEXT':
            state.messageText = action.payload.text
            return state
        default:
            return state
    }
};

export type dialogsMainType = sendMessageACType | newMessageTextACType
type sendMessageACType = ReturnType<typeof sendMessageAC>
type newMessageTextACType = ReturnType<typeof newMessageTextAC>

export const sendMessageAC = (message: string) => ({type: 'SEND_MESSAGE', payload: {message}} as const)
export const newMessageTextAC = (text: string) => ({type: 'NEW_MESSAGE_TEXT', payload: {text}} as const)

export default DialogsReducer;