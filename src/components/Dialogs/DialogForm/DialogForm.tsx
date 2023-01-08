import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {sendMessageAC} from "../../../redux/dialogs-reducer";

type  DialogFormProps = {
    dispatch: (action: any) => void
}

const DialogForm = ({dispatch}: DialogFormProps) => {
    const [message, setMessage] = useState('')
    const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        dispatch(sendMessageAC(message))
        setMessage('')
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(sendMessageAC(message))
            setMessage('')
        }
    }
    return (
        <div>
            <input value={message} onChange={onChangeMessageHandler}
                   onKeyDown={onKeyDownHandler} placeholder='Enter your message'/>
            <button onClick={onClickButtonHandler}>Send</button>
        </div>
    );
};

export default DialogForm;