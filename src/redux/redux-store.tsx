import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer, {profileMainType} from "./profile-reducer";
import dialogsReducer, {dialogsMainType} from "./dialogs-reducer";
import UsersReducer, {usersMainType} from "./users-reducer";
import AuthReducer, {AuthMainType} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import AppReducer, {AppMainType} from "./app-reducer";
import chatReducer, {ChatMainType} from "./chat-reducer";

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
    chat: chatReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type rootReducerType = ReturnType<typeof reducers>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware<IAppDispatch, any>(thunk)))

export type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
//export const store = createStore(reducers, applyMiddleware(thunk))
type IAppDispatch = ThunkDispatch<rootReducerType, any, AppActionsType>
//единый тип для всех экшенов
export type AppActionsType= usersMainType| AuthMainType | dialogsMainType | profileMainType | AppMainType | ChatMainType
//для типизации Dispatch в ThunkCreator, если мы диспатчим в санке санку
//параметры ThunkAction
export type AppThunk = ThunkAction<void | any, rootReducerType, unknown, AppActionsType>
