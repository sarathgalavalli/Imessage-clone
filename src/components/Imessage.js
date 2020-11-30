import React, { Component } from 'react'
import './Imessage.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

export default class Imessage extends Component {
    render() {
        return (
            <div className='imessage'>
                <Sidebar />
                <Chat />
            </div>
        )
    }
}
