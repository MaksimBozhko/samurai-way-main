import React, {ChangeEvent, KeyboardEvent   , useState} from 'react';
import {addMessageAC} from "../../../redux/state";

type  DialogFormProps = {
    dispatch: (action:any) => void
}

const DialogForm = ({dispatch}: DialogFormProps) => {
    const [message, setMessage] = useState('')
    const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        dispatch(addMessageAC(message))
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && dispatch(addMessageAC(message))
        setMessage('')
    }
    return (
        <div>
            <input value={message} onChange={onChangeMessageHandler} onKeyDown={onKeyDownHandler}/>
            <button onClick={onClickButtonHandler} >Send</button>
        </div>
    );
};

export default DialogForm;