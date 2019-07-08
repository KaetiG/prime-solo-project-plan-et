import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
    sun: new Date(2019, 6, 22),
    newmoon: new Date(2019, 6, 2),
    fullmoon: new Date(2019, 6, 16),
    mars: new Date(2019, 6, 1),
    mercury: new Date(2019, 6, 19),
    venus: new Date(2019, 6, 3),
    venus2: new Date(2019, 6, 27),
    mercuryRetrograde: new Date(2019, 6, 7),
    mercuryDirect: new Date(2019, 6, 31)
};

class Calendar extends Component {
    render() {
        return (
            <>
            <div>
                <style>{planetStyles}</style>
                <DayPicker 
                    modifiers={modifiers}
                    month={new Date(2019, 6)} 
                />
            </div>
        
            <div>
                <p style={{color: '#E2E2E2'}}>New Moon July 2</p>
                <p style={{color: '#A6A6A6'}}>Full Moon July 16</p>
                <p style={{color: '#FF3333'}}>Mars enters Leo July 1</p>
                <p style={{color: '#FF77DA'}}>Venus enters Cancer July 3</p>
                <p style={{color: '#0A308F'}}>Mercury Retrograde begins July 7 in Leo</p>
                <p style={{color: '#00D0F1'}}>Mercury Retrograde enters Cancer July 19</p>
                <p style={{color: '#FFFD7F'}}>Sun enters Leo July 22</p>
                <p style={{color: '#FF77DA'}}>Venus enters Leo July 27</p>
                <p style={{color: '#0A308F'}}>Mercury Retrograde ends July 31</p>

            </div>
            </>
        );
    }
}

export default Calendar;