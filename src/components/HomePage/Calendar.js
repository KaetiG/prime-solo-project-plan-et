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
                            <p style={{ color: '#C3C3C3' }}>New Moon October 27 in Scorpio</p>
                            <p style={{ color: '#00D0F1' }}>Mercury Retrograde begins October 31</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Sagittarius November 1</p>
                            <p style={{ color: '#757575' }}>Full Moon November 12 in Taurus</p>
                            <p style={{ color: '#FF3333' }}>Mars enters Scorpio November 19</p>
                            <p style={{ color: '#00D0F1' }}>Mercury Direct begins November 20</p>
                            <p style={{ color: '#EABC39' }}>Sun enters Sagittarius November 22</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Capricorn November 25</p>
                            <p style={{ color: '#C3C3C3' }}>New Moon November 26 in Sagittarius</p>
                            <p style={{ color: '#026E6B' }}>Neptune Direct begins November 27</p>
                            <p style={{ color: '#00933A' }}>Jupiter enters Capricorn December 2</p>
                            <p style={{ color: '#00D0F1' }}>Mercury enters Sagittarius December 9</p>
                            <p style={{ color: '#757575' }}>Full Moon December 12 in Gemini</p>
                            <p style={{ color: '#FF77DA' }}>Venus enters Aquarius December 20</p>
                            <p style={{ color: '#EABC39' }}>Sun enters Capricorn December 21</p>
                            <p style={{ color: '#C3C3C3' }}>New Moon December 26 in Capricorn (Annular SOLAR Eclipse)</p>
                            <p style={{ color: '#00D0F1' }}>Mercury enters Capricorn December 28</p>

                        </div>
                    
                </>
        );
    }
}

export default Calendar;
