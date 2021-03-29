import './index.scss'
import React from 'react'

const Communication = ({data}) => {
    return (
        <div className="communication-main">
            <h4>Send {data.channel}</h4>
            <ul className="messages-main">
                {data.message.map(item=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Communication
