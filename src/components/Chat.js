import React, { useState } from 'react'
import './Chat.css';
import { IconButton } from '@material-ui/core'
import MicNoneIcon from '@material-ui/icons/MicNone';

function Chat() {
    const [input, setInput] = useState("");
    const sendMessage = (event) => {
        event.preventDefault();

        setInput("");

    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <h3>To: <span className='chat__name'>Channel name</span></h3>
                <strong> Details</strong>
            </div>

            <div className='chat__messages'>
                <p>Hi</p>
            </div>
            <div className='chat__input'>
                <form>
                    <input value={input} placeholder='iMessage' onChange={(e) => setInput(e.target.value)} />
                    <button onClick={sendMessage}>Send</button>
                </form>
                <IconButton className="chat__mic">
                    <MicNoneIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Chat;
