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

class NeptuneTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Neptune will be in its home sign of Pisces until 2026.<br /> 
                    This only occurs once every 165 years or so. It is a time for arts, spirtuality, and everything within our subconcious mind.
                    Mindfulness is the main theme of this transit. 
                    Connecting to our inner selves and a resurgence of arts will come from Neptune in Pisces. 
                    </p>
                </div>
            </>
        )
    }
}

export default NeptuneTransit;