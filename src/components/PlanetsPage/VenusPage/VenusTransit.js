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

class VenusTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>While Venus is in Aries, we love the thrill of the chase. 
                        We do not hold onto the past, rather, we look at each new day as a fresh start. 
                        We can be impatient with love, and much prefer to seduce than be seduced. Desires are expressed directly and spontaneously. </p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Taurus is a sensual sign, connected deeply to the five senses. 
                        When Venus is transiting this sign, physical expressions of love and romance are much more important. 
                        We seek security in love, and can become possessive of both people and material items. </p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Our romance is motivated by our curiosity while Venus is in Gemini. 
                        Bonding on a mental level is favored during this time, so we are very communicative. 
                        During this transit we may distance ourselves emotionally.  </p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>Cancer in Venus is nurturing, devoted, loving, and protective. 
                        There is increased emotional sensitivity and we become more attached to loved ones. 
                        We show our love through caring and concern for others. We are extra warm and cuddly during this time.  </p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Leo Venus transits are prideful, grand, and generous. It is a warmhearted, fun time for romance. 
                        We love getting attention, being adored and admired during this time.  </p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>While Venus moves through Virgo, we show our love through small, practical gestures. 
                        Sometimes its as simple as just being there for our loved ones. With Virgo, love needs to have purpose. 
                        It needs to make sense, and everything else also needs to make sense.  </p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Compromise is the theme of Libra Venus transits. 
                        Aggressive behavior is not tolerated, rather, we use our charm to get the things we want.
                        We can be idealistic when it comes to matters of the heart. This transit also promotes artistic activities.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Scorpio Venus energy is passionate and intense by nature. 
                        Relationships are incredibly important to us, and superficial flirting is the opposite of what we truly want. 
                        We strive for deep connections and commitment, but at the same time, trust in our partners is difficult. 
                        We do not want to face vulnerability.  </p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>While in Scorpio the focus is on a single person, Venus transiting Sagittarius focuses on more worldly desires. 
                        Love is straighforward and romantic adventures are the Sagittarius way. </p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Calm, cool, and collected Capricorn transits make it a great time for building relationships with those who will support our ambitions.
                        We get serious when it comes to matters of the heart. 
                        Finances and our relationships with coworkers are affected under this influence in a positive way. 
                    </p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Love is unconventional, independent, and respectful during this transit. 
                        Being friends with our lovers is important to us and experimental relationships are more intriguing. </p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>While Venus moves through Pisces, we are filled with unconditional love, and are much more forgiving of short comings. 
                        We are affectionate, compassionate, but sometimes can be a little distant. 
                    </p>
                </div>
            </>
        )
    }
}

export default VenusTransit;