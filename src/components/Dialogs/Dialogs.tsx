import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import DialogForm from "./DialogForm/DialogForm";
import {useAppSelector} from "../../hooks/hooks";
import {DialogsPageType} from "../../redux/dialogs-reducer";

const Dialogs = () => {
    const {messages, dialogs} = useAppSelector((state):DialogsPageType => state.dialogsPage)
    const dialogsList = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
    const messagesList = messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsList}</div>
            <div>
                <div className={s.messages}>{messagesList}</div>
                <DialogForm />
            </div>
        </div>
    );
};

export default Dialogs;