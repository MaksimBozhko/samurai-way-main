import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import ChatPage from "../../pages/chatPage/ChatPage";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <div className={s.info}>
                <MyPosts />
                <ChatPage />
            </div>
        </div>
    );
};

export default Profile;