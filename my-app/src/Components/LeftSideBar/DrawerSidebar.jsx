import React from 'react';
import './LeftSideBar.css';
import { FaHistory } from 'react-icons/fa';
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai';
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from 'react-icons/md';
import shorts from './shorts.jpg';
import { NavLink } from 'react-router-dom';

function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{margin: "auto 0.7rem"}}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className='icon_sidebar_div'>
            <p>
              <MdOutlineExplore
                size={22}
                className={'icon_sidebar'}
                style={{margin: 'auto 0.7rem'}}
              />
              <div className='text_sidebar_icon'>Explore</div>
            </p>
          </div>
          <div className='icon_sidebar_div'>
            <p>
              <img
                src={shorts}
                width={22}
                className={'icon_sidebar'}
                style={{ margin: 'auto 0.7rem' }}
                alt='Shorts'
              />
              <div className='text_sidebar_icon'>Shorts</div>
            </p>
          </div>
          <div className='icon_sidebar_div'>
            <p>
              <MdSubscriptions
                size={22}
                className={'icon_sidebar'}
                style={{ margin: 'auto 0.7rem' }}
              />
              <div className='text_sidebar_icon'>Subscriptions</div>
            </p>
          </div>
          <div className='libraryBtn_Drawerleftsidebar'>
            <NavLink to={'/Library'} className='icon_sidebar_div'>
              <p>
                <MdOutlineVideoLibrary
                  size={22}
                  className={'icon_sidebar'}
                  style={{ margin: 'auto 0.7rem' }}
                />
                <div className='text_sidebar_icon'>Library</div>
              </p>
            </NavLink>
            <NavLink to={'/WatchHistroy'} className='icon_sidebar_div'>
              <p>
                <FaHistory
                  size={22}
                  className={'icon_sidebar'}
                  style={{ margin: 'auto 0.7rem' }}
                />
                <div className='text_sidebar_icon'>History</div>
              </p>
            </NavLink>
            <NavLink to={'/YourVideo'} className='icon_sidebar_div'>
              <p>
                <AiFillPlaySquare
                  size={22}
                  className={'icon_sidebar'}
                  style={{ margin: 'auto 0.7rem' }}
                />
                <div className='text_sidebar_icon'>PlaySquare</div>
              </p>
            </NavLink>
            <NavLink to={'/WatchLater'} className='icon_sidebar_div'>
              <p>
                <MdOutlineWatchLater
                  size={22}
                  className={'icon_sidebar'}
                  style={{ margin: 'auto 0.7rem' }}
              />
              <div className='text_sidebar_icon'>WatchLater</div>
            </p>
          </NavLink>
          <NavLink to={'/LikedVideo'} className='icon_sidebar_div'>
            <p>
              <AiFillLike
                size={22}
                className={'icon_sidebar'}
                style={{ margin: 'auto 0.7rem' }}
              />
              <div className='text_sidebar_icon'>Liked Videos</div>
            </p>
          </NavLink>
        </div>
        <div className='subScriptions_lsdbar'>
          <h3>Your Subscriptions</h3>
          <div className='chanel_lsdbar'>
            <p>C</p>
            <div>channel</div>
          </div>
          <div className='chanel_lsdbar'>
            <p>C</p>
            <div>channel</div>
          </div>
          <div className='chanel_lsdbar'>
            <p>C</p>
            <div>channel</div>
          </div>
          <div className='chanel_lsdbar'>
            <p>C</p>
            <div>channel</div>
          </div>
          <div className='chanel_lsdbar'>
            <p>C</p>
            <div>channel</div>
          </div>
        </div>
      </div>
      <div
        className='container3_DrawerLeftSidebar'
        onClick={()=>toggleDrawer()}
      ></div>
    </div>
  </div>
  );
}

export default DrawerSidebar;
