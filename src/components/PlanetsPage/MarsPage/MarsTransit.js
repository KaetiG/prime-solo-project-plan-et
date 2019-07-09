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

class MarsTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p></p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p></p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p></p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p></p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p></p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p></p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p></p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p></p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p></p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p></p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p></p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p></p>
                </div>
            </>
        )
    }
}

export default MarsTransit;