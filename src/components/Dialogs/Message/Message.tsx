import React from 'react';

type MessageProps = {
    id: string
    message: string
}

const Message = (props: MessageProps) => {
    return <div className="message">{props.message}</div>
}



export default Message;