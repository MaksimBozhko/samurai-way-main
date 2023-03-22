import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {ProfilePageType} from "../../../redux/redux-store";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import {actions} from "../../../redux/profile-reducer";

const MyPosts = () => {
    const dispatch = useAppDispatch()
    const {posts, postText} = useAppSelector((state):ProfilePageType => state.profilePage)
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       dispatch(actions.newPostTextAC(e.currentTarget.value))
    }
    const onClickButtonHandler = () => {
        dispatch(actions.addPostAC())
    }
    return (
        <Paper className={s.postsBlock}>
            <h3 className={s.title}>POSTS</h3>
            <div className={s.form}>
                <TextField value={postText} onChange={onChangeTextareaHandler}
                           style={{}}
                           className={s.input_form}
                           id="outlined-textarea"
                           label="Whats new happen"
                           placeholder="New posts"
                           multiline
                />
                <Button variant="contained" style={{backgroundColor:'rgb(127, 202, 245)'}}
                        className={s.btn_form}
                        onClick={onClickButtonHandler}
                        endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
            <div className={s.posts}>
                {posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} />)}
            </div>
        </Paper>
    );
};

export default MyPosts;
