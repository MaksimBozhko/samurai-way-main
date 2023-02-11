import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../hooks/hooks";
import { updateStatusThunkCreator} from "../../../../redux/profile-reducer";

type ProfileStatus = {
    status: string
    URLId: string | undefined
}

const ProfileStatus = ({status, URLId}: ProfileStatus) => {
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState(false)
    const [statusInput, setStatusInput] = useState(status)
    useEffect(() => {
        setStatusInput(status)
    },[status])
    const onClickStatusHandler = () => {
        setEditMode(true)
    }
    const onBlurInputHandler = () => {
        dispatch(updateStatusThunkCreator(statusInput))
        setEditMode(false)
    }
    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusInput(e.currentTarget.value)
    }
    return !URLId && editMode ?
        <input value={statusInput} onChange={onChangeStatusHandler} onBlur={onBlurInputHandler} autoFocus/> :
        <span onDoubleClick={onClickStatusHandler}>Status:{status}</span>
};

export default ProfileStatus;