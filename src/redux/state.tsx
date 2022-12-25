export type StateProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
}
export type PostPropsType = {
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

const state: StateProps = {
    profilePage: {
        posts: [
            {message: 'HI!!!', likesCount: 10},
            {message: 'hello', likesCount: 20},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Aleksandr'},
        ],
        messages: [
            {id: 1, message: 'hello!'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'I\'m ok'},
        ]
    }
}

export default state