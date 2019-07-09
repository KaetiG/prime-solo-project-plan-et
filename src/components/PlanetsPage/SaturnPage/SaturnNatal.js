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

class SaturnNatal extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>Saturn in Aries take longer to find their drive and figure out how to use their energy. 
                        As they get older, they find themselves to be more assertive and independent. 
                        In their youth they are more reserved.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Saturn in Taurus tends to have to work hard for what they have. 
                        As they age, they get better at speaking and communicating. 
                        Changes are achieved slowly.</p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>In youth, Saturn in Gemini people may struggle with learning, but get better as they age. 
                        They also will never forget anything they learn, and can sort through details with ease.</p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>Cancer Saturns need a safe home with family. 
                        They also are quite protective of their family and may sacrifice a lot to keep their comfortable home.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Leo Saturns may severally lack self confidence. 
                        They expect a lot from themselves and want admiration from those around them.</p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Virgo Saturns can sometimes be overly critical of themselves. 
                        They are very hard workers and have a need to be productive with their time. 
                        If they aren’t working, they feel useless.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Libra Saturns have a difficult time connecting with people. 
                        They want to be around people but cannot help pushing them away.</p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Scorpio in Saturn people try hard to keep control of themselves. 
                        They have a strong will and transform themselves often.</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>People with this placement try hard to appear open despite it being difficult for them to accept other points of view. 
                        Sagittarius Saturns have strong beliefs.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Saturn is right at home here in Capricorn. 
                        People with this placement are ambitious goal setters. 
                        It may take a while to achieve their goals, but they work hard until they reach them, 
                        typically when they are older.</p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Aquarius Saturns may have goals relating to helping humanity. 
                        They can be emotionally distant and be lacking in intimate relationships, despite wanting them. 
                        They are able to come up with ideas that are innovative but will not stray too far from normalcy.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Pisces Saturns have a strong spirituality and will sacrifice a lot to hold onto it. 
                        They are sensitive and can sometimes feel like the world is out to get them.</p>
                </div>
            </>
        )
    }
}

export default SaturnNatal;