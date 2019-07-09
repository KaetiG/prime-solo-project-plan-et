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

class NeptuneNatal extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Neptune in Aries people have incredibly strong beliefs and will take on many creative projects. 
                        They have a desire to improve life for everyone.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Neptune in Taurus people love the arts and anything beautiful. 
                        They have an eye on their dreams and can become obsessed with them.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>This placement grants inspiration in their words. They get bored easily. 
                        Neptune in Gemini people may find studies in communications and mathematics.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>The dreams of Neptune Cancers surround their homes and their families. 
                        They are incredibly dedicated to them.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Neptune Leos are kids at heart no matter the age. 
                        They are attracted to entertainment and drama industries. They are very creative placements as well.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Neptune Virgos are very health conscious and will try to get those around them to adopt healthier lifestyles.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Neptune Libras are incredibly indecisive. 
                        This placement wants the whole world in perfect balance, not just their own lives.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Neptune Scorpios want to transform the world. 
                        They also wish to transcend themselves and are often interested in deeply spiritual experiences. 
                        They must be wary of addiction</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>Neptune in Sagittarius people gravitate to science fiction and fantasy. 
                        They enjoy expanding their world.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Neptune Capricorns are inspired through arts. 
                        They wish the world rewarded hard work more than it does and their creativity is fairly practical.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Neptune in Aquarius people are focused on the future. 
                        They thrive on their originality and are pure humanitarians at heart.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Neptune in Pisces people sometimes do not grasp reality very well. 
                        They are spiritual and are attracted to the arts. They will sacrifice a lot in order to help others.</p>
                </div>
            </>
        )
    }
}

export default NeptuneNatal;