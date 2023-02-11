import React, {ChangeEvent, useEffect} from 'react';
import s from './ProfileInfo.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {useParams} from "react-router-dom";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    ProfilePageType,
    savePhotoThunkCreator
} from "../../../redux/profile-reducer";
import ProfileStatus from './profileStatus/ProfileStatus'
import Paper from '@mui/material/Paper';
import {AuthInitialType} from "../../../redux/auth-reducer";
import Description from "./description/Description";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {UploadButton} from "../../common/uploadButton";
import Avatar from "@mui/material/Avatar";
import avatar from '../../../assets/images/avatar.webp'

const ProfileInfo =() => {
    console.log('info')
    const dispatch = useAppDispatch()
    const {profile, status} = useAppSelector((state): ProfilePageType => state.profilePage)
    const {id} = useAppSelector((state): AuthInitialType => state.auth)
    let {userId: URLId} = useParams<string>()
    let userId: string = !URLId ? id : URLId
    useEffect(() => {
        if (userId) {
            dispatch(getProfileThunkCreator(userId))
            dispatch(getStatusThunkCreator(userId))
        }
    }, [userId])
    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) dispatch(savePhotoThunkCreator(e.target.files[0]))
    }
    return (
        <>
            <Paper>
                <div className={s.profile_photo}></div>
            </Paper>
            <Paper className={s.profile} elevation={2}>
                    <div className={s.photoBlock}>
                        <Avatar className={s.img}
                                sx={{ width: 150, height: 150 }}
                                src={profile.photos.large || profile.photos.small || avatar}/>
                        {!URLId && (
                            <UploadButton color='inherit'
                                          onChange={onChangePhoto}
                                          buttonImg={<PhotoCamera/>}
                            />
                        )}
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{profile.fullName}</div>
                        <ProfileStatus URLId={URLId} status={status}/>
                    </div>
                    <Description URLId={URLId} profile={profile}/>
            </Paper>
        </>
    );
};

export default ProfileInfo;