import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {ChatMessageType} from "../../../API/chatAPI";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../../redux/chat-reducer";

export const Chat = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
    return (
        <div>
            <Messages />
            <AddMessageForm/>
        </div>
    );
};

export const Messages = () => {
    const messages = useAppSelector(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)
    const scrollHandler = (e:React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            !isAutoScroll && setIsAutoScroll(false)
        }
    }
    useEffect(() => {
        isAutoScroll && messagesAnchorRef.current?.scrollIntoView({behavior:'smooth'})
    }, [messages])
    return (
        <div style={{height:'400px', overflowY:'auto'}} onScroll={scrollHandler}>
            {messages.map((message , index) => <Message key={index} message={message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

type MessageType = {
    message: ChatMessageType
}

const Message = React.memo(({message: m}: MessageType) => {
    return (
        <div>
            <img src={m.photo} />
            name: {m.userName}
            message: {m.message}
        </div>
    );
})


export const AddMessageForm = () => {
    const [message, setMessage] = useState('')
    const status = useAppSelector(state => state.chat.status)
    const dispatch = useAppDispatch()
    const onChangeMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (!message) return
        dispatch(sendMessage(message))
        setMessage('')
    }
    return (
        <div>
            <textarea onChange={onChangeMessage} value={message}></textarea>
            <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
        </div>
    );
};