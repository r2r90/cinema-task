import React from 'react';
import '../styles/Sidebar.scss';

import profileImg from '../assets/profile.jpg';
import searchIcon from '../assets/icons/ICON - Search.png';
import homeIcon from '../assets/icons/Group 46.png';
import tvShowsIcon from '../assets/icons/Group 56.png';
import moviesIcon from '../assets/icons/Group 54.png';
import genresIcon from '../assets/icons/Group 53.png';
import watchLaterIcon from '../assets/icons/Group 47.png';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='profile'>
          <div className='profile-image'>
            <img src={profileImg} alt="profile" />
          </div>
          <span>Artur</span>
        </div>

        <div className='nav-menu'>
          <a href='#'>
            <img src={searchIcon} alt="Search" />
            <span>Search</span>
          </a>
          <a href='/'>
            <img src={homeIcon} alt="home" />
            <span>Home</span>
          </a>
          <a href='#'>
            <img src={tvShowsIcon} alt="home" />
            <span>TV Shows</span>
          </a>
          <a href='#'>
            <img src={moviesIcon} alt="home" />
            <span>Movies</span>
          </a>
          <a href='#'>
            <img src={genresIcon} alt="home" />
            <span>Genres</span>
          </a>
          <a href='#'>
            <img src={watchLaterIcon} alt="home" />
            <span>Watch Later</span>
          </a>
        </div>
        <div className='options'>
          <span>Language</span>
          <span>Get Help</span>
          <span>Exit</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
