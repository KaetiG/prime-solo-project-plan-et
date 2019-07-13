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

class JupiterTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <blockquote class="blockquote">Jupiter is in its home sign of Sagittarius until December 2nd, 2019.<br/>
                    Jupiter’s effects are to expand our experiences, our knowledge, and our understanding. 
                    Jupiter represents optimism, growth, generosity, and abundance. 
                    In Scorpio, Jupiter expanded our awareness of our intimate relationships, personal power, and coping skills. 
                    Now, with Jupiter in Sagittarius, a new focus comes into play. 
                    Jupiter’s transit through the sign that it rules, fiery Sagittarius, urges us to increase our cultural and spiritual awareness, to expand our higher minds, to broaden our experiences, and to have faith in the universe.
                    As Jupiter moves through Sagittarius, we deepen our interest in philosophical, and perhaps religious, thought, and determine what it is that gives us joy–what truly is important in our lives in the long run. 
                    We trust in something higher than us, and this gives us a sense that we are doing the right thing and that we are spiritually protected–“things will work out” is the overall attitude now.
                    <footer class="blockquote-footer">cafeastrology</footer></blockquote>
                    
                </div>
            </>
        )
    }
}

export default JupiterTransit;