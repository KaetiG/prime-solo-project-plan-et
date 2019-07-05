import React, { Component } from 'react';
import { connect } from 'react-redux';


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    sun: '',
    moon: '',
    ascendent: '',
    mercury: '',
    venus: '',
    mars: '',
    jupiter: '',
    saturn: '',
    neptune: '',
    uranus: '',
    pluto: ''

  };

  registerUser = (event) => {
    event.preventDefault();
    //if this errors later, it may have to be one line :(//
    if (this.state.username
      && this.state.password
      && this.state.sun
      && this.state.moon
      && this.state.ascendent
      && this.state.mercury
      && this.state.venus
      && this.state.mars
      && this.state.jupiter
      && this.state.saturn
      && this.state.neptune
      && this.state.uranus
      && this.state.pluto) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          sun: this.state.sun,
          moon: this.state.moon,
          ascendent: this.state.ascendent,
          mercury: this.state.mercury,
          venus: this.state.venus,
          mars: this.state.mars,
          jupiter: this.state.jupiter,
          saturn: this.state.saturn,
          neptune: this.state.neptune,
          uranus: this.state.uranus,
          pluto: this.state.pluto,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          {/* INSERT DROP DOWNS HERE */}
          <div class="form-group">
            <label for="selectSun">Sun</label>
            <select class="form-control" id="selectSun">
              <option>Aries</option>
              <option>Taurus</option>
              <option>Gemini</option>
              <option>Cancer</option>
              <option>Leo</option>
              <option>Virgo</option>
              <option>Libra</option>
              <option>Scorpio</option>
              <option>Sagittarius</option>
              <option>Capricorn</option>
              <option>Aquarius</option>
              <option>Pisces</option>
            </select>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

