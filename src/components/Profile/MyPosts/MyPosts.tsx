import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {addPostAC} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import {PostPropsType} from "../../../redux/state";

type MyPostsProps = {
    posts: Array<PostPropsType>
    dispatch: (action: any) => void
}

const MyPosts = ({posts, dispatch}: MyPostsProps) => {
    const [title, setTitle] = useState<string>('')
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        dispatch(addPostAC(title))
        setTitle('')
    }
    return (
        <div className={s.postsBlock}>
           <h3>myPosts</h3>
            <div>
                <div>
                    <textarea value={title} onChange={onChangeTextareaHandler}></textarea>
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
