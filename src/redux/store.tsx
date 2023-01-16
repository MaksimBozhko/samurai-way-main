
import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type StateProps = {

}
/*
export type ProfilePageType = {
    posts: Array<PostPropsType>
    postText: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPageType = {
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

let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'HI!!!', likesCount: 10},
                {id: v1(), message: 'hello', likesCount: 20},
            ]
        },
        dialogsPage: {
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
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}
export default store*/
