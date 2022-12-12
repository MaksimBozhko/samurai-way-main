import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' >Anton</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' >Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' >Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' >Aleksandr</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="message">hello!</div>
                <div className="message">how are you?</div>
                <div className="message">I'm ok</div>
            </div>
        </div>
    );
};

export default Dialogs;