import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { stack as Menu } from 'react-burger-menu';

import { ReactComponent as PostIcon } from '../icons/post.svg';
import { ReactComponent as UserIcon } from '../icons/user.svg';
import { ReactComponent as PlanetsIcon } from '../icons/solar-system.svg';
import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import LogOutButton from '../LogOutButton/LogOutButton';



const Nav = (props) => (
  
    <div className="nav">
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
        <Menu>
        <a className="menu-item" href="#/home">
        <HomeIcon width="25px" height="25px" className="iconFill" />  Home
        </a>
        <br />
        <a className="menu-item" href="#/profile">
        <UserIcon width="25px" height="25px" className="iconFill" />  Profile
        </a>
        <br />
        <a className="menu-item" href="#/moon">
        <MoonIcon width="25px" height="25px" className="iconFill" />  Moon
        </a>
        <br />
        <a className="menu-item" href="#/planets/sun">
        <PlanetsIcon width="25px" height="25px" className="iconFill" />  Planets
        </a>
        <br />
        <a className="menu-item" href="#/posts">
        <PostIcon width="25px" height="25px" className="iconFill" />  Posts
        </a>
       <br />
       <br />
       <br />
       <br />
       <br />
       <a href=""><LogOutButton className="menu-item" /></a>
        </Menu>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
    </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  loginMode: state.loginMode,
});

export default connect(mapStateToProps)(Nav);
