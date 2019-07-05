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
    console.log(event.target.value)
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
            <label htmlFor="selectSun">Sun</label>
            <select class="form-control" name="sun" onChange={this.handleInputChangeFor('sun')} value={this.state.sun}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectMoon">Moon</label>
            <select class="form-control" name="moon" onChange={this.handleInputChangeFor('moon')} value={this.state.moon}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectAscendent">Ascendent</label>
            <select class="form-control" name="ascendent" onChange={this.handleInputChangeFor('ascendent')} value={this.state.ascendent}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectMercury">Mercury</label>
            <select class="form-control" name="mercury" onChange={this.handleInputChangeFor('mercury')} value={this.state.mercury}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectVenus">Venus</label>
            <select class="form-control" name="venus" onChange={this.handleInputChangeFor('venus')} value={this.state.venus}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectMars">Mars</label>
            <select class="form-control" name="mars" onChange={this.handleInputChangeFor('mars')} value={this.state.mars}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectJupiter">Jupiter</label>
            <select class="form-control" name="jupiter" onChange={this.handleInputChangeFor('jupiter')} value={this.state.jupiter}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectSaturn">Saturn</label>
            <select class="form-control" name="saturn" onChange={this.handleInputChangeFor('saturn')} value={this.state.saturn}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectNeptune">Neptune</label>
            <select class="form-control" name="neptune" onChange={this.handleInputChangeFor('neptune')} value={this.state.neptune}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectUranus">Uranus</label>
            <select class="form-control" name="uranus" onChange={this.handleInputChangeFor('uranus')} value={this.state.uranus}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="selectPluto">Pluto</label>
            <select class="form-control" name="pluto" onChange={this.handleInputChangeFor('pluto')} value={this.state.pluto}>
              <option value='1'>Aries</option>
              <option value='2'>Taurus</option>
              <option value='3'>Gemini</option>
              <option value='4'>Cancer</option>
              <option value='5'>Leo</option>
              <option value='6'>Virgo</option>
              <option value='7'>Libra</option>
              <option value='8'>Scorpio</option>
              <option value='9'>Sagittarius</option>
              <option value='10'>Capricorn</option>
              <option value='11'>Aquarius</option>
              <option value='12'>Pisces</option>
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

