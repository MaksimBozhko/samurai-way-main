import {v1} from "uuid";

const ADD_POST = 'ADD-POST';

export type StateProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
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
        switch (action.type) {
            case ADD_POST:
                const newPost = {id: v1(), message: action.message, likesCount: 0}
                this._state.profilePage.posts = [...this._state.profilePage.posts, newPost]
                this._callSubscriber()
        }
    }
}

export const addPostAC = (title: string) => ({type: ADD_POST, message: title})

export default store