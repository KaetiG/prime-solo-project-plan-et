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

class PlutoNatal extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Pluto in Aries people will throw themselves head first into new projects without thinking.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Pluto in Taurus people are dedicated to their paths. 
                        They will follow them slowly, but will never stray from them. 
                        No matter the difficulty, they continue towards wealth and happiness.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Pluto in Gemini folk strive for constant change. 
                        Knowledge is power for this placement. 
                        They can get deep into complicated issues easily and absorb a lot of information.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>Pluto Cancers strive for protection. 
                        They have strong emotions and their needs for security will change over time.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Pluto Leos strive to express themselves. 
                        They can be dramatic, but they give their all to the things they are passionate about. 
                        This is especially true for romance.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Pluto Virgos do not like to be in the lime light, but will always strive to make things better whenever and if possible. 
                        They sometimes sacrifice their own needs to help others.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Pluto Libras find growth through their relationships. 
                        They are all about compromise and are always striving for balance and equality.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Pluto Scorpios are able to deal with inner issues with determination. 
                        They will fight fiercely for what they believe is right and not care much for rules. </p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>This placement finds growth through new experiences. 
                        Pluto in Sagittarius challenges others to open their minds to new beliefs and ideas, and are generally optimistic.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Pluto Capricorns are practical and hard-working. 
                        They are responsible and practice good self control.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Pluto in Aquarius need to do things in their own individual way. 
                        Their ideas can push boundaries of the norm. They also want freedom for everyone.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>This placement may tend to constantly worry whether or not their decisions effect others negatively. 
                        They can be inspiring people, and may feel misunderstood sometimes.</p>
                </div>
            </>
        )
    }
}

export default PlutoNatal;