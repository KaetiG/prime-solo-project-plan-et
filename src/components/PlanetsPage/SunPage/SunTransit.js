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

class SunTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>While the Sun is in Aries, we are more impulsive but can be short-sighted.  
                        We are brave and pioneering, with a touch of innocence. 
                        We are direct with our needs. </p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>During Taurus season, sensuality and needs for security take over. We are resistant to change. 
                        The other side of Taurus' coin is possessiveness and stubbornness. Loyalty may lead to that possessiveness. </p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Gemini season brings curiosity, and a lot of it. 
                        Knowledge empowers us and makes us more sociable and intellectual with our peers. 
                        We also tend to be more scattered during this season. </p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>During Cancer season, we are very protective of ourselves and our loved ones. 
                        We are drawn to our home. We crave security, we are more nurturing, and our emotions run deeply. 
                        We are very receptive to the moon’s influences while the Sun is in Cancer.</p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>The Sun rules over Leo, and this transit brings warmth, generosity, and pride. We are playful, but can be a little dramatic. 
                        Its time to shine during this season, and we have a need to express ourselves. 
                        Be wary of becoming a little self centered. </p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Virgo season shifts our focus onto all the little details in our lives. 
                        We like to be more organized and practical.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>While the Sun transits Libra, we strive for compromise. 
                        We focus on finding balance through our relationships and also through arts. 
                        Decision making is much more difficult during this season. 
                        Both sides are weighed and sometimes nothing comes to fruition. </p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Scorpio season is all about desires. Depth, intimacy, and emotions are at an all time high. 
                        During this time, superficiality is not at all welcome. 
                        We are attracted to mystery, basically anything hidden. Scorpio energy is healing and transformative. </p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>As the Sun moves into Sagittarius, we desire to explore and connect with the rest of the world. 
                        Our understanding and cultural awareness are higher, and we are more able to branch out into new ideas. 
                        We are optimistic towards the big picture and lose focus on the details.</p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>While the Sun transits through Capricorn, our motivations are rooted in responsibility, our ambitions, and structure. 
                        We strive for tangible results. If something is not feasible, it is not a priority. 
                        We have higher respect for law and order. 
                        Having a long term goal to work towards is best for this transit. </p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Aquarius season brings a thirst for knowledge and originality. 
                        Innovation helps us strive to look outside the box and see new perspectives. 
                        Structure and order that we found appealing in Capricorn season is now seen as too suffocating during Aquarius. </p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>The Sun reaches the end of its cycle through the signs in Pisces. 
                        Pisces season brings imagination and a “go with the flow” mentality. We have a lot of empathy for others, but the negative side of 
                        Pisces brings self pity, playing the victim, and becoming disconnected from reality. </p>
                </div>
            </>
        )
    }
}

export default SunTransit;