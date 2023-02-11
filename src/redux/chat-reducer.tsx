import React, {Dispatch} from 'react';
import {AppThunk} from "./redux-store";
import {chatAPI, ChatMessageType, StatusType} from "../API/chatAPI";
import {v1} from "uuid";

type MessageType = ChatMessageType & {id: string}
export const initialState = {
    messages: [] as MessageType[],
    status: 'pending' as StatusType
}
export type ChatInitialType = typeof initialState

const chatReducer = (state: ChatInitialType = initialState, action: ChatMainType): ChatInitialType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({ ...m, id: v1()}))].filter((m, index, arr) => arr.length < 100)
            }
        case 'STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
};

export type ChatMainType = MessagesReceivedType | statusChangedType
type MessagesReceivedType = ReturnType<typeof messagesReceived>
type statusChangedType = ReturnType<typeof statusChanged>

export const messagesReceived = (messages: ChatMessageType[]) => {
    return {type: 'MESSAGES_RECEIVED', payload: {messages}} as const
}
export const statusChanged = (status: StatusType) => {
    return {type: 'STATUS_CHANGED', payload: {status}} as const
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch<any>) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangeHandler: ((messages: StatusType) => void) | null = null
const statusChangeHandlerCreator = (dispatch: Dispatch<any>) => {
    if (_statusChangeHandler === null) {
        _statusChangeHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangeHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangeHandlerCreator(dispatch))
};

export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangeHandlerCreator(dispatch))
    chatAPI.stop()
};

export const sendMessage = (message: string): AppThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
};

export default chatReducer;