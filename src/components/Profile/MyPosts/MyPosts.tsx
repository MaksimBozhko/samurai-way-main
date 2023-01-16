import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {ProfilePageType} from "../../../redux/redux-store";
import {addPostAC, newPostTextAC} from "../../../redux/profile-reducer";

const MyPosts = () => {
    const dispatch = useAppDispatch()
    const {posts, postText} = useAppSelector((state):ProfilePageType => state.profilePage)
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(newPostTextAC(e.currentTarget.value))
    }
    const onClickButtonHandler = () => {
        dispatch(addPostAC())
    }
    return (
        <div className={s.postsBlock}>
           <h3>myPosts</h3>
            <div>
                <div>
                    <textarea value={postText} onChange={onChangeTextareaHandler}></textarea>
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} />)}
            </div>
        </div>
    );
};

export default MyPosts;
