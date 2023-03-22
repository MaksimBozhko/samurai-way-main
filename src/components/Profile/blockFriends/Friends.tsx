import React, {useEffect} from 'react';
import s from './friends.module.css'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {getFriendsThunkCreator, UserType} from '../../../redux/users-reducer';
import {UserPhoto} from '../../common/userPhoto/UserPhoto';
import Paper from '@mui/material/Paper';


const Friend = ({name, photos}: UserType) => {
    return <div className={s.friend}>
        <UserPhoto  clasName={s.userPhoto} photos={photos} />
        <p>{name}</p>
    </div>
}

const Friends = () => {
    const dispatch = useAppDispatch()
    const {friends} = useAppSelector(state => state.users)
    useEffect(() => {
        dispatch(getFriendsThunkCreator())
    }, [])
    const friendsList = friends.map((friend) => <Friend {...friend} />)
    return (
        <Paper className={s.friends}>
            <h3 className={s.title}>FRIENDS</h3>
            <div className={s.friendsBlock}>
            {friendsList}
            </div>
        </Paper>
    );
};

export default Friends;