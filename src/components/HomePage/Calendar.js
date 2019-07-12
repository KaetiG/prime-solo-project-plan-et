import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
import { ReactComponent as Pisces } from '../icons/pisces.svg';

const planetStyles = `.DayPicker-Day--mars {
    background-color: #FF3333;
    color: white;
  } .DayPicker-Day--mercury {
      background-color: #00D0F1;
      color: white;
  } .DayPicker-Day--venus {
      background-color: #FF77DA;
      color: white;
  } .DayPicker-Day--venus2 {
      background-color: #FF77DA;
      color: white;
  } .DayPicker-Day--mercuryRetrograde {
      background-color: #0A308F;
      color: white;
  } .DayPicker-Day--mercuryDirect {
      background-color: #0A308F;
      color: white;
  } .DayPicker-Day--sun {
      background-color: #FFFD7F;
      color: red;
  } .DayPicker-Day--newmoon {
      background-color: #E2E2E2;
      color: white;
  } .DayPicker-Day--fullmoon {
      background-color: #A6A6A6;
      color: white;
  } .DayPicker-wrapper {
      outline: none;
  }`;

const modifiers = {
    sun: new Date(2019, 6, 22, 12, 0, 0),
    newmoon: new Date(2019, 6, 2, 12, 0, 0),
    fullmoon: new Date(2019, 6, 16, 12, 0, 0),
    mars: new Date(2019, 6, 1, 12, 0, 0),
    mercury: new Date(2019, 6, 19, 12, 0, 0),
    venus: new Date(2019, 6, 3, 12, 0, 0),
    venus2: new Date(2019, 6, 27, 12, 0, 0),
    mercuryRetrograde: new Date(2019, 6, 7, 12, 0, 0),
    mercuryDirect: new Date(2019, 6, 31, 12, 0, 0)
};

class Calendar extends Component {
    handleDayClick = (date) => {
        console.log(date)
        console.log(modifiers.newmoon, 'new moon mod')
        if (new Date(2019, 6, 2, 12, 0, 0) === date) {
            alert('new moon')
        }
        else if (modifiers.mercury === date) {
            alert('mercury enters cancer')
        }
    }

    render() {
        return (
            <>
                <div class="container-fluid">
                    <center>
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
                                            Moon (Full)
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
                                            <Mercury height="30px" width="30px" />
                                        </td>
                                        <td>
                                            Mercury(R)
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
                        <div class="row" className="calendarDiv">
                            <h2>Calendar</h2>
                            <style>{planetStyles}</style>
                            <DayPicker
                                modifiers={modifiers}
                                month={new Date(2019, 6)}
                                onDayClick={this.handleDayClick}

                            />
                        </div>

                        <div className="calKey">
                            <p style={{ color: '#E2E2E2' }}>New Moon July 2</p>
                            <p style={{ color: '#A6A6A6' }}>Full Moon July 16</p>
                            <p style={{ color: '#FF3333' }}>Mars enters Leo July 1</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Cancer July 3</p>
                            <p style={{ color: '#0A308F' }}>Mercury Retrograde begins July 7 in Leo</p>
                            <p style={{ color: '#00D0F1' }}>Mercury Retrograde enters Cancer July 19</p>
                            <p style={{ color: '#FFFD7F' }}>Sun enters Leo July 22</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Leo July 27</p>
                            <p style={{ color: '#0A308F' }}>Mercury Retrograde ends July 31</p>

                        </div>
                    </center>
                </div>
            </>
        );
    }
}

export default Calendar;