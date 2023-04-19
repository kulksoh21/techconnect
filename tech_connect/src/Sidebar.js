import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';


function Sidebar() {

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
        <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Kishan Challagulla</h2>
                <h4>Incoming SWE intern @ Optum</h4>
        </div>

        <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber">97</p>
                    </div>

                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">654</p>
                    </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("softwareengineering")}
            {recentItem("AI")}
            {recentItem("Crypto")}
            {recentItem("FTX")}

        </div>
    </div>
  )
}

export default Sidebar
