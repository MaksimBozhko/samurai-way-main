import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import Friends from './blockFriends/Friends';

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <div className={s.info}>
                <MyPosts />
                <Friends />
            </div>
        </div>
    );
};

export default Profile;