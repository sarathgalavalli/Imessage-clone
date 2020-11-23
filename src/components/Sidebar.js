import React, { Component } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search'
import RateReviewIcon from '@material-ui/icons/RateReview';
import SideBarChat from './SideBarChat';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar className="sidebar__avatar" />
                    <div className="sidebar__input">
                        <SearchIcon />
                        <input placeholder="Search" />

                    </div>
                    <IconButton variant='outlined' className="sidebar__inputbutton">
                        <RateReviewIcon />
                    </IconButton>
                </div>
                <div className="sidebar__chat">
                    <SideBarChat />
                </div>

            </div>
        )
    }
}
