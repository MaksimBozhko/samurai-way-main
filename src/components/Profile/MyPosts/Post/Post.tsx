import React from 'react';
import s from './Post.module.css'
import {PostPropsType} from "../../../../redux/redux-store";
import {UserPhoto} from '../../../common/userPhoto/UserPhoto';
import {useAppSelector} from '../../../../hooks/hooks';

const Post = (props: PostPropsType) => {
    const {photos} = useAppSelector(state => state.profilePage.profile)
    return (
        <div className={s.post}>
            <UserPhoto clasName={s.userPhoto} photos={photos} />
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post