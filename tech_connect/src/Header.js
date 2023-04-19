import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption.js";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className = "header">

      <div className="header__left">
        <img src="icons8-linkedin.svg" alt=""/>

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

      </div>

      <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon}title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon}title="Jobs" />
            <HeaderOption Icon={ChatIcon}title="Messaging" />
            <HeaderOption Icon={NotificationsIcon}title="Notifications" />
            <HeaderOption avatar="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" title="Me" />

      </div>
    </div>
  )
}

export default Header
