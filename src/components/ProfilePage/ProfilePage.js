import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import  { ReactComponent as Moon } from '../icons/moon.svg';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_NATAL_CHART", payload: this.props.user.id });
  }
  render() {
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
          </h1>
      <div>
            {this.props.natalReducer.map((description) => <div key={description.id}>
           
              <h3>Sun</h3>
              <p>{description.description_sun}</p>
              <Moon height='80px'/>
              <h3>Moon</h3>
              <p>{description.description_moon}</p>

              <h3>Ascendent/Rising</h3>
              <p>{description.description_asc}</p>
              <h3>Mercury</h3>
              <p>{description.description_mercury}</p>
              <h3>Venus</h3>
              <p>{description.description_venus}</p>
              <h3>Mars</h3>
              <p>{description.description_mars}</p>
              <h3>Jupiter</h3>
              <p>{description.description_jupiter}</p>
              <h3>Saturn</h3>
              <p>{description.description_saturn}</p>
              <h3>Neptune</h3>
              <p>{description.description_neptune}</p>
              <h3>Uranus</h3>
              <p>{description.description_uranus}</p>
              <h3>Pluto</h3>
              <p>{description.description_pluto}</p>
              
              
              
              </div>)}
            {/* change how this displays */}
          </div>
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
  natalReducer: state.natalReducer
});
//<p>Your Sun is: {props.user.sun}</p>
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProfilePage);
