import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    sun: '1',
    moon: '1',
    ascendent: '1',
    mercury: '1',
    venus: '1',
    mars: '1',
    jupiter: '1',
    saturn: '1',
    neptune: '1',
    uranus: '1',
    pluto: '1'

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
        <br/>
        <br/>
        {this.props.errors.registrationMessage && (
          alert(this.props.errors.registrationMessage)
          
        )}
        <form className="registerForm" onSubmit={this.registerUser}>
          <h1>Register</h1>
          <p>To register for Planit, you will need your birth chart information.
            <br />
            You can find this information for free on websites like <Link className="regLinkRef" to="https://astro.cafeastrology.com/natal.php">astro.cafeastrology</Link> or <Link className="regLinkRef" to="https://www.costarastrology.com/natal-chart/">Co-Star</Link>
          </p>
          <div>
            <label htmlFor="username">
              Username<br />
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
              Password<br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          {/* INSERT DROP DOWNS HERE */}
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <div class="form-group" className="registerSigns">
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
          <br />
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <br />
        <br />
        <center>
        <p className="loginRegText">
          Already a member?
        </p>
          <button
            type="button"
            className="log-in"
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

