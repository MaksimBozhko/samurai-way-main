import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import DialogForm from "./DialogForm/DialogForm";

type DialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action:any) => void
}

const Dialogs = ({dialogsPage, dispatch}: DialogsType) => {

    const dialogs = dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    const messages = dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogs}</div>
            <div>
                <div className={s.messages}>{messages}</div>
                <DialogForm dispatch={dispatch} />
            </div>
        </div>
    );
};

export default Dialogs;