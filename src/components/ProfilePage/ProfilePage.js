import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class ProfilePage extends Component {
componentDidMount(){
  this.props.dispatch({ type: "GET_NATAL_CHART" });
}
render(){
  return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    <LogOutButton className="log-in" />
  </div>
)
}
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});
//<p>Your Sun is: {props.user.sun}</p>
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProfilePage);
