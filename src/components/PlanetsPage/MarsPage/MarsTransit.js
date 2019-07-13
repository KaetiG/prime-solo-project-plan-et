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
                    <p>Mars is at home in Aries. Courage and spontaneity are in abundance under this influence. 
                        our actions are straight-forward and brave. This is a competitive time. 
                        We find the quickest way from point A to point B. During this transit we are more susceptible to arrogance, 
                        self-centeredness, and impatience. 
                    </p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Our actions while Mars is in Taurus are stubborn and determined. 
                        Its a passive transit that is strongest when defensive.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>While Mars is in Gemini, we lose our focus! However, this transit also promotes flexibility and versatility. 
                        Actions are scattered and our attention is much less determined. 
                    </p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>During this transit, Cancer makes it hard to go for direct approaches. Mood swings are more frequent, 
                        and we are more prone to being defensive rather than assertive. 
                        Our actions are determined by our emotional state at the time.
                    </p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>We are proud and grand in all we do while Mars transits prideful Leo. 
                        Our actions are direct, and our sex drives are strong.  </p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>During this transit, the drive to work hard is extremely high. We are passionate about details. 
                        Timing is important right now. How well we are doing is also important to us.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>While Mars is in Libra our actions are indecisive but we use our charm as our decisive weapon of choice. 
                        Arguments are faught indirectly and with style. Be mindful of becoming passive aggressive. 
                    </p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Mars in Scorpio throws our focus into over drive. 
                        We are driven by our need to understand what is going on just under the surface. 
                        We are drawn to problems, and find them exciting emotionally. </p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>Ideals drive our actions during Mars' transit through Sagittarius. 
                        We are overcome with wanderlust, and become restless if we start to feel trapped.
                        If we start a new project, we start it with plenty of excitement and motivation, but it may be abandoned some time later. </p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Persistance and reliability are common themes during Capricorn Mars transits. 
                        It may take a while for us to be angered, but when it happens it is met with a rather cold frustration. 
                        Our actions are carefully thought out during this time. Possible consequences and consideration for the future drive those actions. 
                    </p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>During Mars in Aquarius, our actions are approached from an intellectual and emotionally detatched mindset. 
                        When frustrated, it is usually an impersonal expression. 
                        Energy levels are erratic but that makes for some dynamic cooperative problem solving.  </p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Pisces Mars transits bring out some people pleasing tendancies. We are more inclined to put others' needs ahead of our own.
                        We strive towards more emotional or spiritual goals than traditional ones. Our energy levels are constantly fluctuating during this time.
                    </p>
                </div>
            </>
        )
    }
}

export default MarsTransit;