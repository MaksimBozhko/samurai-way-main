import React, {useState} from 'react';
import s from './sign.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {AuthInitialType, logoutThunkCreator} from "../../../redux/auth-reducer";
import {ProfilePageType} from "../../../redux/profile-reducer";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';

const Sign = () => {
    const [show, setShow] = useState(false)
    const dispatch = useAppDispatch()
    const {profile} = useAppSelector((state): ProfilePageType => state.profilePage)
    const {isAuth} = useAppSelector((state): AuthInitialType => state.auth)
    const onClickLogoutHandler = () => {
        dispatch(logoutThunkCreator());
    }
    const onClickSignHandler = () => {
        setShow(!show)
    }
    return <div>
        {isAuth
            ? <div className={s.sign} onClick={onClickSignHandler}>
                <Avatar src={profile.photos.small}/>
                {show ? <div>
                    <KeyboardArrowDownIcon/>
                    <button onClick={onClickLogoutHandler}>logout</button>
                </div> : <KeyboardArrowLeftIcon/>}
            </div>
            : <Avatar/>}
    </div>
};
export default Sign;