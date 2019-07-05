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
              <option value={this.state.sun}>Aries</option>
              <option value={this.state.sun}>Taurus</option>
              <option value={this.state.sun}>Gemini</option>
              <option value={this.state.sun}>Cancer</option>
              <option value={this.state.sun}>Leo</option>
              <option value={this.state.sun}>Virgo</option>
              <option value={this.state.sun}>Libra</option>
              <option value={this.state.sun}>Scorpio</option>
              <option value={this.state.sun}>Sagittarius</option>
              <option value={this.state.sun}>Capricorn</option>
              <option value={this.state.sun}>Aquarius</option>
              <option value={this.state.sun}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectMoon">Moon</label>
            <select class="form-control" id="selectMoon">
              <option value={this.state.moon}>Aries</option>
              <option value={this.state.moon}>Taurus</option>
              <option value={this.state.moon}>Gemini</option>
              <option value={this.state.moon}>Cancer</option>
              <option value={this.state.moon}>Leo</option>
              <option value={this.state.moon}>Virgo</option>
              <option value={this.state.moon}>Libra</option>
              <option value={this.state.moon}>Scorpio</option>
              <option value={this.state.moon}>Sagittarius</option>
              <option value={this.state.moon}>Capricorn</option>
              <option value={this.state.moon}>Aquarius</option>
              <option value={this.state.moon}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectAscendent">Ascendent</label>
            <select class="form-control" id="selectAscendent">
              <option value={this.state.ascendent}>Aries</option>
              <option value={this.state.ascendent}>Taurus</option>
              <option value={this.state.ascendent}>Gemini</option>
              <option value={this.state.ascendent}>Cancer</option>
              <option value={this.state.ascendent}>Leo</option>
              <option value={this.state.ascendent}>Virgo</option>
              <option value={this.state.ascendent}>Libra</option>
              <option value={this.state.ascendent}>Scorpio</option>
              <option value={this.state.ascendent}>Sagittarius</option>
              <option value={this.state.ascendent}>Capricorn</option>
              <option value={this.state.ascendent}>Aquarius</option>
              <option value={this.state.ascendent}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectMercury">Mercury</label>
            <select class="form-control" id="selectMercury">
              <option value={this.state.mercury}>Aries</option>
              <option value={this.state.mercury}>Taurus</option>
              <option value={this.state.mercury}>Gemini</option>
              <option value={this.state.mercury}>Cancer</option>
              <option value={this.state.mercury}>Leo</option>
              <option value={this.state.mercury}>Virgo</option>
              <option value={this.state.mercury}>Libra</option>
              <option value={this.state.mercury}>Scorpio</option>
              <option value={this.state.mercury}>Sagittarius</option>
              <option value={this.state.mercury}>Capricorn</option>
              <option value={this.state.mercury}>Aquarius</option>
              <option value={this.state.mercury}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectVenus">Venus</label>
            <select class="form-control" id="selectVenus">
              <option value={this.state.venus}>Aries</option>
              <option value={this.state.venus}>Taurus</option>
              <option value={this.state.venus}>Gemini</option>
              <option value={this.state.venus}>Cancer</option>
              <option value={this.state.venus}>Leo</option>
              <option value={this.state.venus}>Virgo</option>
              <option value={this.state.venus}>Libra</option>
              <option value={this.state.venus}>Scorpio</option>
              <option value={this.state.venus}>Sagittarius</option>
              <option value={this.state.venus}>Capricorn</option>
              <option value={this.state.venus}>Aquarius</option>
              <option value={this.state.venus}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectMars">Mars</label>
            <select class="form-control" id="selectMars">
              <option value={this.state.mars}>Aries</option>
              <option value={this.state.mars}>Taurus</option>
              <option value={this.state.mars}>Gemini</option>
              <option value={this.state.mars}>Cancer</option>
              <option value={this.state.mars}>Leo</option>
              <option value={this.state.mars}>Virgo</option>
              <option value={this.state.mars}>Libra</option>
              <option value={this.state.mars}>Scorpio</option>
              <option value={this.state.mars}>Sagittarius</option>
              <option value={this.state.mars}>Capricorn</option>
              <option value={this.state.mars}>Aquarius</option>
              <option value={this.state.mars}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectJupiter">Jupiter</label>
            <select class="form-control" id="selectJupiter">
              <option value={this.state.jupiter}>Aries</option>
              <option value={this.state.jupiter}>Taurus</option>
              <option value={this.state.jupiter}>Gemini</option>
              <option value={this.state.jupiter}>Cancer</option>
              <option value={this.state.jupiter}>Leo</option>
              <option value={this.state.jupiter}>Virgo</option>
              <option value={this.state.jupiter}>Libra</option>
              <option value={this.state.jupiter}>Scorpio</option>
              <option value={this.state.jupiter}>Sagittarius</option>
              <option value={this.state.jupiter}>Capricorn</option>
              <option value={this.state.jupiter}>Aquarius</option>
              <option value={this.state.jupiter}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectSaturn">Saturn</label>
            <select class="form-control" id="selectSaturn">
              <option value={this.state.saturn}>Aries</option>
              <option value={this.state.saturn}>Taurus</option>
              <option value={this.state.saturn}>Gemini</option>
              <option value={this.state.saturn}>Cancer</option>
              <option value={this.state.saturn}>Leo</option>
              <option value={this.state.saturn}>Virgo</option>
              <option value={this.state.saturn}>Libra</option>
              <option value={this.state.saturn}>Scorpio</option>
              <option value={this.state.saturn}>Sagittarius</option>
              <option value={this.state.saturn}>Capricorn</option>
              <option value={this.state.saturn}>Aquarius</option>
              <option value={this.state.saturn}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectNeptune">Neptune</label>
            <select class="form-control" id="selectNeptune">
              <option value={this.state.neptune}>Aries</option>
              <option value={this.state.neptune}>Taurus</option>
              <option value={this.state.neptune}>Gemini</option>
              <option value={this.state.neptune}>Cancer</option>
              <option value={this.state.neptune}>Leo</option>
              <option value={this.state.neptune}>Virgo</option>
              <option value={this.state.neptune}>Libra</option>
              <option value={this.state.neptune}>Scorpio</option>
              <option value={this.state.neptune}>Sagittarius</option>
              <option value={this.state.neptune}>Capricorn</option>
              <option value={this.state.neptune}>Aquarius</option>
              <option value={this.state.neptune}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectUranus">Uranus</label>
            <select class="form-control" id="selectUranus">
              <option value={this.state.uranus}>Aries</option>
              <option value={this.state.uranus}>Taurus</option>
              <option value={this.state.uranus}>Gemini</option>
              <option value={this.state.uranus}>Cancer</option>
              <option value={this.state.uranus}>Leo</option>
              <option value={this.state.uranus}>Virgo</option>
              <option value={this.state.uranus}>Libra</option>
              <option value={this.state.uranus}>Scorpio</option>
              <option value={this.state.uranus}>Sagittarius</option>
              <option value={this.state.uranus}>Capricorn</option>
              <option value={this.state.uranus}>Aquarius</option>
              <option value={this.state.uranus}>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectPluto">Pluto</label>
            <select class="form-control" id="selectPluto">
              <option value={this.state.pluto}>Aries</option>
              <option value={this.state.pluto}>Taurus</option>
              <option value={this.state.pluto}>Gemini</option>
              <option value={this.state.pluto}>Cancer</option>
              <option value={this.state.pluto}>Leo</option>
              <option value={this.state.pluto}>Virgo</option>
              <option value={this.state.pluto}>Libra</option>
              <option value={this.state.pluto}>Scorpio</option>
              <option value={this.state.pluto}>Sagittarius</option>
              <option value={this.state.pluto}>Capricorn</option>
              <option value={this.state.pluto}>Aquarius</option>
              <option value={this.state.pluto}>Pisces</option>
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

