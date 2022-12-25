import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = ({dialogsPage}: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={s.messages}>
                {dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />)}
            </div>
        </div>
    );
};

export default Dialogs;