import React from 'react';
import {followThunkCreator, UserType} from "../../../redux/users-reducer";
import s from "../users.module.css";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/hooks";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import avatar from '../../../assets/images/avatar.webp'

type UserPropsType = {
    user: UserType
}

const User = ({user}: UserPropsType) => {
    const dispatch = useAppDispatch()
    const changeFollowHandler = (followed: boolean, userId: string) => {
        dispatch(followThunkCreator(followed, userId))
    }
    return <Paper key={user.id} className={s.users}>
        <div className={s.imgContainer}>
            <NavLink to={"/profile/" + user.id}><Avatar className={s.img}
                                                        sx={{ width: 90, height: 90 }}
                                                        src={avatar}/></NavLink>
        </div>
        <div className={s.description}>
            <div className={s.text}>
                <p className={s.name}>{user.name}</p>
                {user.status && (
                    <p className={s.status}>Status: {user.status}</p>
                )}
            </div>
            <Button color={'inherit'} onClick={() => changeFollowHandler(user.followed, user.id)}>
                {user.followed ? 'unfollow' : 'follow'}
            </Button>
        </div>
    </Paper>
};

export default User;