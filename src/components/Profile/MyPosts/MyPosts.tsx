import React from 'react';
import s from './MyPosts.module.css'
import {PostPropsType} from "../../../redux/state";
import Post from "./Post/Post";

type MyPostsProps = {
    posts: Array<PostPropsType>
}

const MyPosts = ({posts}: MyPostsProps) => {
    console.log(posts)
    return (
        <div className={s.postsBlock}>
           <h3>myPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)}
            </div>
        </div>
    );
};

export default MyPosts;
