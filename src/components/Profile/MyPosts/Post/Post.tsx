import React from 'react';
import s from './Post.module.css'
import {PostPropsType} from "../../../../redux/state";

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" alt=""/>
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post