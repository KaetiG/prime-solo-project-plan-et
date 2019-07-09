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

class JupiterNatal extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Through positivity, life is what you make it in this placement. 
                        If they take the lead or do the job solo, the tend to garner better results.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Confidence and a charitable nature will bring this placement good fortune. 
                        Jupiter in Taurus people also have good instincts for finances and material worth.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Jupiter in Gemini will attract luck through honest curiosity and friendliness.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>When sympathetic and charitable, such as in the real estate or food industry, this placement can be quite prosperous.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Generosity and inspiring confidence in those around them will bring this placement good fortune. 
                        Avoiding egotism and embracing creativity will help Jupiter Leos prosper.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Values technical and practical skills. 
                        This placement is most prosperous when they are helpful to others and pay attention to details.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Good fortune finds those in this placement through balance. 
                        May need a partner to be successful but they must be on equal footing.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Jupiter in Scorpio brings good fortune through dedication and putting their all into what ever they are doing. 
                        They favor the mysterious and taboo.</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>Jupiter in Sagittarius will find good fortune in travel, teaching, and foreign cultures. 
                        They will also find success if they are generous and practice what they preach.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>This placement will succeed as long as they are resourceful, organized, and responsible. 
                        They do best when they are in charge. Their status is valued highly by Jupiter Capricorns.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>When Jupiter in Aquarius is cooperative, and embraces their individuality they will have long lasting achievement. 
                        They can make great humanitarians.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>When compassionate, charitable to those less fortunate, and devoted, this placement will find success. 
                        They should be kind to all in order to achieve.</p>
                </div>
            </>
        )
    }
}

export default JupiterNatal;