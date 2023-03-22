import React from 'react';
import avatar from '../../../assets/images/avatar.webp';
import {UserPhotosType} from '../../../redux/users-reducer';

export const UserPhoto = ({photos, clasName}: {photos: UserPhotosType, clasName?: any}) => {
    const userPhoto = photos.large
        ? photos.large
        : photos.small
            ? photos.small
            : avatar
    return <img className={clasName} src={userPhoto} alt="photo"/>
};