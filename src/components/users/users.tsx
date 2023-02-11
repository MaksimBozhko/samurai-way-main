import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUsersThunkCreator, UsersType, UserType} from "../../redux/users-reducer";
import Pagination from "../common/pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";
import User from "./user/User";

const Users = () => {
    const dispatch = useAppDispatch()
    const {users, totalUserCount, pageSize, currentPage, isFetching} = useAppSelector((state): UsersType => state.users)
    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize))
    }, [])
    return <>
        <Pagination totalUserCount={totalUserCount} pageSize={pageSize} currentPage={currentPage}/>
        {isFetching && <Preloader />}
        {users.map((u: UserType) => <User key={u.id} user={u}/>)}
    </>;
};

export default Users;