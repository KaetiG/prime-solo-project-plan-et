import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { stack as Menu } from 'react-burger-menu';

const Nav = (props) => (
  
    <div className="nav">
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
        <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <br />
        <a className="menu-item" href="#/profile">
          Profile
        </a>
        <br />
        <a className="menu-item" href="#/moon">
          Moon
        </a>
        <br />
        <a className="menu-item" href="#/planets/sun">
          Planets
        </a>
        <br />
        <a className="menu-item" href="#/posts">
          Posts
        </a>
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
