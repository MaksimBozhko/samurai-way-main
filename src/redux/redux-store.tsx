import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";

export type StateProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
    postText: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const store = createStore(reducers)