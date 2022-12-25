import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileProps = {
    profilePage: ProfilePageType
}

const Profile = ({profilePage}: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} />
        </div>
    );
};

export default Profile;