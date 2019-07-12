import React, { Component } from 'react';

import { ReactComponent as Aries } from '../icons/aries.svg';
import { ReactComponent as Taurus } from '../icons/taurus.svg';
import { ReactComponent as Gemini } from '../icons/gemini.svg';
import { ReactComponent as Cancer } from '../icons/cancer.svg';
import { ReactComponent as Leo } from '../icons/leo.svg';
import { ReactComponent as Virgo } from '../icons/virgo.svg';
import { ReactComponent as Libra } from '../icons/libra.svg';
import { ReactComponent as Scorpio } from '../icons/scorpio.svg';
import { ReactComponent as Sagittarius } from '../icons/sagittarius.svg';
import { ReactComponent as Capricorn } from '../icons/capricorn.svg';
import { ReactComponent as Aquarius } from '../icons/aquarius.svg';
import { ReactComponent as Pisces } from '../icons/pisces.svg';

class MoonTransits extends Component {
    render(){
        return(
            <>
                    <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>During an Aries transit, emotions are impulsive, energetic, daring, with a strong desire to start fresh or begin something new. 
                        This is a good time to do some physical activity to burn off some of that excess energy. 
                        Don’t put too much on your plate or it could cause unnecessary stress trying to get everything done, and trying to do it fast.
                    </p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>While the Moon is in Taurus, we feel more sensual. 
                        We crave security, peace, and comfort. We slow down, take our time and indulge ourselves. 
                        We resist change. 
                        This is a good time to work on financial endeavors since Taurus rules over finances. </p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>As the Moon moves into Gemini, we desire more mental stimulation. We are curious, inquisitive, and somewhat restless if we do not get the mental stimulation we crave. 
                        Communication is very important to us. The desire to learn and multitask is stronger as well. 
                        It is a good time to read, learn something new, have deep conversations. 
                        Be wary of restlessness turning into irritability. </p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>The Moon is at home while transiting Cancer. We are nurturing, cuddly, and need to feel safe. 
                        We desire time at home spending time with loved ones. 
                        We feel all of our emotions, good or bad, very deeply. 
                        We can be moody and should try to be mindful of emotional outbursts. 
                        Its also a good time for self healing. </p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>During Leo transits we are dramatic. “Go big or go home” is the theme. 
                        We need attention, affection and appreciation. We feel positive, energetic, and more fun. 
                        It is a great time to get on stage, have a first date or be romantic in general. 
                        Be wary of being superficial, self centered, and dramatic. </p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>During Virgo transits, we tend to be more health conscious. 
                        We are practical, more detail oriented, and finding solutions becomes easier for us. 
                        We re-organize and re-think our plans. This is not the best time for socializing. 
                        One should be mindful of being overly analytical, rigid, and uptight. 
                        This is however, a good time to get some cleaning done. </p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Libra Moon transits bring a need for beauty. 
                        We crave emotional balance with others and the world. 
                        Our inner peace keeper comes out making it difficult to be assertive in conflict. 
                        We tend to avoid direct confrontations. We are more social during this time but only with harmonious company. 
                        Making decisions is harder during this transit. Relationships may also come into focus. 
                        It is a good time for some retail therapy or to work on those aforementioned relationships. </p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>Moon transiting Scorpio brings jealousy and a need to dig and get to the bottom of things. 
                        Emotions run deep and passionate. This moon weighs heavy. 
                        We do not feel light hearted or easy going during this time. 
                        We are unwelcoming toward superficiality, and more attuned to our sexuality. 
                        Be wary of obsessive or manipulative tendencies. 
                        By ridding oneself of fears and limits, transformation can be achieved.</p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>While the Moon is transiting through Sagittarius, we need adventure and new experiences. 
                        It is a very optimistic time. We yearn for freedom, so its a great time to explore outdoors and utilize a little spontaneity. 
                        We are looking to have fun, avoid responsibilities, and we are less detail oriented. </p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Capricorn Moon transits bring structure. We are practical but ambitious. 
                        We plan ahead and desire success. Our goals come into focus, while our emotions are put on the back burner. 
                        We are very aware of time constraints and will sacrifice time with loved ones to focus on career oriented activities. 
                        During this time we should be mindful of coldness toward others. 
                        Unlike Sagittarius, Capricorn will tend to lay on the pessimism. </p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>During Aquarius Moon transits, we rebel against norms and desire to be unique. 
                        We are experimental and quite social. 
                        While during Capricorn transit we desire structure, during Aquarius we desire freedom. 
                        It is a good time for humanitarian efforts, new ideas, and thinking outside the box. 
                        Our thinking is more intellectual rather than emotional.</p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>While the Moon moves through Pisces we are very sensitive and vulnerable to others. 
                        We are feeling romantic and dreamy. Daydreaming increases and we tend to retreat from reality, feeling it is too harsh. 
                        We are drawn to music and water related activities. We are compassionate and intuitive. 
                        Our boundaries blur, so we should be mindful of those boundaries. </p>
                </div>
            </>
        )
    }
}

export default MoonTransits;