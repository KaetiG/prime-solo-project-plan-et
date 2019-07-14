import React, { Component } from 'react';

import { ReactComponent as Aries } from '../../icons/aries.svg';
import { ReactComponent as Taurus } from '../../icons/taurus.svg';
import { ReactComponent as Gemini } from '../../icons/gemini.svg';
import { ReactComponent as Cancer } from '../../icons/cancer.svg';
import { ReactComponent as Leo } from '../../icons/leo.svg';
import { ReactComponent as Virgo } from '../../icons/virgo.svg';
import { ReactComponent as Libra } from '../../icons/libra.svg';
import { ReactComponent as Scorpio } from '../../icons/scorpio.svg';
import { ReactComponent as Sagittarius } from '../../icons/sagittarius.svg';
import { ReactComponent as Capricorn } from '../../icons/capricorn.svg';
import { ReactComponent as Aquarius } from '../../icons/aquarius.svg';
import { ReactComponent as Pisces } from '../../icons/pisces.svg';

class PlutoTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Pluto will reside in Capricorn until 2024. <br />
                    Pluto transits help us look within ourselves, and confront what ever darkness is hindering our growth. 
                    While in Capricorn the focus will be on subjects like status, our sense of security, our material resources, finances, and power.</p>
                  
                </div>
            </>
        )
    }
}

export default PlutoTransit;