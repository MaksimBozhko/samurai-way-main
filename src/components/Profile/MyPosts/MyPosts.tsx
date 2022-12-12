import React from 'react';
import Post, {PostPropsType} from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    const post:Array<PostPropsType> = [
        {message:'HI!!!', likesCount:10},
        {message:'hello', likesCount:20},
    ]

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
                {post.map(el => <Post message={el.message} likesCount={el.likesCount} />)}
                {/*<Post  message={post[0].message} like={post[0].like} />
                <Post message={post[1].message} like={post[1].like} />*/}
            </div>
        </div>
    );
};

export default MyPosts;