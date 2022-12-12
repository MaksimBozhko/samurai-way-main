import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemProps = {
    id: number
    name: string
}

const DialogItem = (props: DialogsItemProps) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
        </div>
    )
}

export default DialogItem

