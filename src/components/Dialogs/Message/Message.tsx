import React from 'react';

type MessageProps = {
    id: number
    message: string
}

const Message = (props: MessageProps) => {
    return <div className="message">{props.message}</div>
}



export default Message;