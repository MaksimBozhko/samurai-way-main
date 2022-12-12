import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    message: string
}

const Dialogs = () => {
    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Aleksandr'},
    ]
    let messagesData: Array<MessagesDataType> = [
        {id: 1, message: 'hello!'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'I\'m ok'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Message id={m.id} message={m.message} />)}
            </div>
        </div>
    );
};

export default Dialogs;