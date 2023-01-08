import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";

type ProfileProps = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

const Profile = ({profilePage, dispatch}: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} dispatch={dispatch} />
        </div>
    );
};

export default Profile;