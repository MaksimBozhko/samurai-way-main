import React, {ChangeEvent, KeyboardEvent} from 'react';
import {DialogsPageType, newMessageTextAC, sendMessageAC} from "../../../redux/dialogs-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


const DialogForm = () => {
    const dispatch = useAppDispatch()
    const {messageText} = useAppSelector((state):DialogsPageType => state.dialogsPage)
    const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(newMessageTextAC(e.currentTarget.value))
    }
    const onClickButtonHandler = () => {
        dispatch(sendMessageAC(messageText))
        dispatch(newMessageTextAC(''))
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(sendMessageAC(messageText))
            dispatch(newMessageTextAC(''))
        }
    }
    return (
        <div>
            <input value={messageText} onChange={onChangeMessageHandler}
                   onKeyDown={onKeyDownHandler} placeholder='Enter your message'/>
            <button onClick={onClickButtonHandler}>Send</button>
        </div>
    );
};

export default DialogForm;