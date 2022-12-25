import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileProps = {
    profilePage: ProfilePageType
    addUser: (message: string) => void
}

const Profile = ({profilePage, addUser}: ProfileProps) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} addUser={addUser} />
        </div>
    );
};

export default Profile;