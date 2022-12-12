import React from 'react';
import Post, {PostPropsType} from "./Post/Post";

const MyPosts = () => {
    const post:Array<PostPropsType> = [
        {message:'HI!!!', like:10},
        {message:'hello', like:20},
    ]

    return (
        <div>
            myPosts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div>
                {post.map(el => <Post message={el.message} like={el.like} />)}
                {/*<Post  message={post[0].message} like={post[0].like} />
                <Post message={post[1].message} like={post[1].like} />*/}
            </div>
        </div>
    );
};

export default MyPosts;