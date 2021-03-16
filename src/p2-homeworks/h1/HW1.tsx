import React from 'react'
import css from './Message.module.css'
import Message from './Message';

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text some textsome textsome textsome textsome text',
    time: '22:00',
}

function HW1() {

    return (
        <div className={css.backgroundcolor}>
            <hr/>
            <Message
                avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time}
            />
            <Message
                avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time}
            />
            <Message
                avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time}
            />

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    );
}

export default HW1
