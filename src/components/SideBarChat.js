import React, { Component } from 'react'
import './Sidebarchat.css';
import { Avatar } from '@material-ui/core';

export default class SideBarChat extends Component {
    render() {
        return (
            <div className='sidebarchat'>
                <Avatar />
                <div className="sidebar__infochart">
                    <h2>Name</h2>
                    <p>Information</p>
                    <small>timestamp</small>

                </div>
            </div>
        )
    }
}
