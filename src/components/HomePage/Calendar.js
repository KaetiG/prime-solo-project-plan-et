import React, { Component } from 'react';
//import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

// const planetStyles = `.DayPicker-Day--mars {
//     background-color: #FF3333;
//     color: white;
//   } .DayPicker-Day--mercury {
//       background-color: #00D0F1;
//       color: white;
//   } .DayPicker-Day--venus {
//       background-color: #FF77DA;
//       color: white;
//   } .DayPicker-Day--venus2 {
//       background-color: #FF77DA;
//       color: white;
//   } .DayPicker-Day--mercuryRetrograde {
//       background-color: #0A308F;
//       color: white;
//   } .DayPicker-Day--mercuryDirect {
//       background-color: #0A308F;
//       color: white;
//   } .DayPicker-Day--sun {
//       background-color: #FFFD7F;
//       color: red;
//   } .DayPicker-Day--newmoon {
//       background-color: #E2E2E2;
//       color: white;
//   } .DayPicker-Day--fullmoon {
//       background-color: #A6A6A6;
//       color: white;
//   } .DayPicker-wrapper {
//       outline: none;
//   }`;

// const modifiers = {
//     sun: new Date(2019, 6, 22, 12, 0, 0),
//     newmoon: new Date(2019, 6, 2, 12, 0, 0),
//     fullmoon: new Date(2019, 6, 16, 12, 0, 0),
//     mars: new Date(2019, 6, 1, 12, 0, 0),
//     mercury: new Date(2019, 6, 19, 12, 0, 0),
//     venus: new Date(2019, 6, 3, 12, 0, 0),
//     venus2: new Date(2019, 6, 27, 12, 0, 0),
//     mercuryRetrograde: new Date(2019, 6, 7, 12, 0, 0),
//     mercuryDirect: new Date(2019, 6, 31, 12, 0, 0)
// };

class Calendar extends Component {
    // handleDayClick = (date) => {
    //     if (new Date(2019, 6, 2, 12, 0, 0) === date) {
    //         alert('new moon')
    //     }
    //     else if (modifiers.mercury === date) {
    //         alert('mercury enters cancer')
    //     }
    // }

    render() {
        return (
            <>
                
                        {/* <div class="row" className="calendarDiv">
                            <h2>Calendar</h2>
                            <style>{planetStyles}</style>
                            <DayPicker
                                modifiers={modifiers}
                                month={new Date(2019, 6)}
                                //onDayClick={this.handleDayClick}

                            />
                        </div> */}

                        <div className="calKey">
                            <p style={{ color: '#757575' }}>Full Moon August 15 in Aquarius</p>
                            <p style={{ color: '#FF3333' }}>Mars enters Virgo August 18</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Virgo August 21</p>
                            <p style={{ color: '#EABC39' }}>Sun enters Virgo August 23</p>
                            <p style={{ color: '#00D0F1' }}>Mercury enters Virgo August 29</p>
                            <p style={{ color: '#C3C3C3' }}>New Moon August 30 in Virgo </p>
                            <p style={{ color: '#757575' }}>Full Moon September 14 in Pisces</p>
                            <p style={{ color: '#00D0F1' }}>Mercury enters Libra September 14</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Libra September 14</p>
                            <p style={{ color: '#4C0090' }}>Saturn goes Direct September 18</p>
                            <p style={{ color: '#EABC39' }}>Sun enters Libra September 23</p>
                            <p style={{ color: '#C3C3C3' }}>New Moon September 28 in Libra</p>

                        </div>
                    
                </>
        );
    }
}

export default Calendar;
