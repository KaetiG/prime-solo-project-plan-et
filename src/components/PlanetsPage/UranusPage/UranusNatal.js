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

class UranusNatal extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Uranus Aries tend to have no problem coming up with new ideas, but they struggle to figure out if their ideas are good or bad. 
                        They are excited to try new things, which can sometimes lead to being impulsive.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Uranus Taurus is easy going for the most part but has quite the stubborn side.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Uranus Gemini loves to learn and is especially drawn to technology. 
                        They are quite adaptable and enjoy learning about unusual subjects.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>Uranus Cancers have a lot of dedication to their families and their homes. 
                        Their families may border on the more unconventional side.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Uranus Leos are natural leaders and can speak their ideas very passionately. 
                        They will typically follow their own path.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Uranus Virgos are inventive and efficient. 
                        They are fairly health conscious and may have more concern for the environment. 
                        Science is a common interest for this placement as well.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Uranus Libras want equality and will fight to get it for themselves and others. 
                        Their relationships need to have an unusual quality in order for them to last. 
                        This placement also may have some sort of artistic talent.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Uranus Scorpios are great researchers. 
                        They are able to find new and different ways to solving problems and are very determined in their endeavors.</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>Uranus in Sagittarius people are brutally honest and do not care for the repercussions. 
                        They can be unreliable despite wanting to help. 
                        This placement loves to push boundaries when coming up with new and unconventional ideas.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Uranus Capricorns can come up with innovative ideas rather quickly, and they will almost always bring them success. 
                        They are responsible and can make quick decisions when they will help them to achieve their goals.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Uranus Aquarius people are incredibly dedicated when it comes to their friends and humanitarian causes. 
                        They are always looking towards the future but can be a little scattered.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Uranus Pisces folk have wonderful intuition. 
                        They favor spiritual ideas and are attracted to fantasy.</p>
                </div>
            </>
        )
    }
}

export default UranusNatal;