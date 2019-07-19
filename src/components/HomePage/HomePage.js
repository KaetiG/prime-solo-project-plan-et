import React from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';

import  { ReactComponent as Sun } from '../icons/sun2.svg';
import  { ReactComponent as Moon } from '../icons/moon.svg';
import  { ReactComponent as Mercury } from '../icons/mercury.svg';
import  { ReactComponent as Venus } from '../icons/venus.svg';
import  { ReactComponent as Mars } from '../icons/mars.svg';
import  { ReactComponent as Jupiter } from '../icons/jupiter.svg';
import  { ReactComponent as Saturn } from '../icons/saturn-sign.svg';
import  { ReactComponent as Neptune } from '../icons/neptune.svg';
import  { ReactComponent as Uranus } from '../icons/uranus-sign.svg';
import  { ReactComponent as Pluto } from '../icons/pluto.svg';

import { ReactComponent as Taurus } from '../icons/taurus.svg';
import { ReactComponent as Cancer } from '../icons/cancer.svg';
import { ReactComponent as Leo } from '../icons/leo.svg';
import { ReactComponent as Sagittarius } from '../icons/sagittarius.svg';
import { ReactComponent as Capricorn } from '../icons/capricorn.svg';
import { ReactComponent as Aquarius } from '../icons/aquarius.svg';
import { ReactComponent as Pisces } from '../icons/pisces.svg';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const HomePage = (props) => (
  <div class="container-fluid">
    <center>
      <br />
      <br />
      <div class="row" className="aspectsDiv">
        <br />
        <h2>Current Transits</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <Sun height="30px" width="30px" />
              </td>
              <td>
                Sun
              </td>
              <td>
                in
              </td>
              <td>
                Cancer
              </td>
              <td>
                <Cancer height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Moon height="30px" width="30px" />
              </td>
              <td>
                Moon
              </td>
              <td>
                in
                </td>
              <td>
                Aquarius
              </td>
              <td>
                <Aquarius height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Mercury height="30px" width="30px" />
              </td>
              <td>
                Mercury(R)
              </td>
              <td>
                in
              </td>
              <td>
                Cancer
              </td>
              <td>
                <Cancer height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Venus height="30px" width="30px" />
              </td>
              <td>
                Venus
              </td>
              <td>
                in
              </td>
              <td>
                Cancer
              </td>
              <td>
                <Cancer height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Mars height="30px" width="30px" />
              </td>
              <td>
                Mars
              </td>
              <td>
                in
              </td>
              <td>
                Leo
              </td>
              <td>
                <Leo height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Jupiter height="30px" width="30px" />
              </td>
              <td>
                Jupiter(R)
              </td>
              <td>
                in
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                <Sagittarius height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Saturn height="30px" width="30px" />
              </td>
              <td>
                Saturn(R)
              </td>
              <td>
                in
               </td>
              <td>
                Capricorn
              </td>
              <td>
                <Capricorn height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Uranus height="30px" width="30px" />
              </td>
              <td>
                Uranus
              </td>
              <td>
                in
              </td>
              <td>
                Taurus
              </td>
              <td>
                <Taurus height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Neptune height="30px" width="30px" />
              </td>
              <td>
                Neptune(R)
              </td>
              <td>
                in
              </td>
              <td>
                Pisces
              </td>
              <td>
                <Pisces height="30px" width="30px" />
              </td>
            </tr>
            <tr>
              <td>
                <Pluto height="30px" width="30px" />
              </td>
              <td>
                Pluto(R)
              </td>
              <td>
                in
              </td>
              <td>
                Capricorn
              </td>
              <td>
                <Capricorn height="30px" width="30px" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <Calendar />
    </center>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
