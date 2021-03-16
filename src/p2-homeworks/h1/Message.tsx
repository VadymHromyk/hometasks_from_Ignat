import React from 'react'
import css from './Message.module.css'
import {messageDataType} from './HW1';


function Message(props: messageDataType) {
    return (
        <div className={css.message}>
            <div className={css.photo}>
                <img src={props.avatar} alt="none"/>
            </div>
            <div className={css.square}>
                <div className={css.title}>
                    {props.name}
                </div>
                <div className={css.messageData}>
                    <div>{props.message}</div>
                    <div className={css.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
