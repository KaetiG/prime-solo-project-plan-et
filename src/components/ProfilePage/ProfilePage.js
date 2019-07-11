import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import  { ReactComponent as Sun } from '../icons/sun2.svg';
import  { ReactComponent as Moon } from '../icons/moon.svg';
import  { ReactComponent as Rising } from '../icons/caret-symbol.svg';
import  { ReactComponent as Mercury } from '../icons/mercury.svg';
import  { ReactComponent as Venus } from '../icons/venus.svg';
import  { ReactComponent as Mars } from '../icons/mars.svg';
import  { ReactComponent as Jupiter } from '../icons/jupiter.svg';
import  { ReactComponent as Saturn } from '../icons/saturn-sign.svg';
import  { ReactComponent as Neptune } from '../icons/neptune.svg';
import  { ReactComponent as Uranus } from '../icons/uranus-sign.svg';
import  { ReactComponent as Pluto } from '../icons/pluto.svg';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_NATAL_CHART", payload: this.props.user.id });
  }
  render() {
    return (
      <div className="profileDiv">
        <h2 id="welcome">
          Welcome, {this.props.user.username}!
          </h2><br />
      <div>
            {this.props.natalReducer.map((description) => <div key={description.id}>
            <Sun height='80px' width="80"/> 
              <h3>Sun</h3>
              <p>{description.description_sun}</p>
              <Moon height='80px' width="80"/>
              <h3>Moon</h3>
              <p>{description.description_moon}</p>
              <Rising height='80px' width="80"/>
              <h3>Ascendent/Rising</h3>
              <p>{description.description_asc}</p>
              <Mercury height='80px' width="80"/>
              <h3>Mercury</h3>
              <p>{description.description_mercury}</p>
              <Venus height='80px' width="80"/>
              <h3>Venus</h3>
              <p>{description.description_venus}</p>
              <Mars height='80px' width="80"/>
              <h3>Mars</h3>
              <p>{description.description_mars}</p>
              <Jupiter height='80px' width="80"/>
              <h3>Jupiter</h3>
              <p>{description.description_jupiter}</p>
              <Saturn height='80px' width="80"/>
              <h3>Saturn</h3>
              <p>{description.description_saturn}</p>
              <Neptune height='80px' width="80"/>
              <h3>Neptune</h3>
              <p>{description.description_neptune}</p>
              <Uranus height='80px' width="80"/>
              <h3>Uranus</h3>
              <p>{description.description_uranus}</p>
              <Pluto height='80px' width="80"/>
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
