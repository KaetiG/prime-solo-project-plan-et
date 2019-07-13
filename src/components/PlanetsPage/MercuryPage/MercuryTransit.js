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

class MercuryTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Aries height='80px' />
                    <h4>Aries</h4>
                    <p>We are bold and assertive in our thinking during Mercury's transit through Aries. 
                        We tend to make decisions as quickly as possible. 
                        Our speech is more direct but spontaneous, while our thoughts and ideas are pioneering.</p>
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Down to earth, grounded thinking is the Taurus in Mercury way. We utilize more common sense and our minds attune to our five senses. 
                    </p>
                    <Gemini height='80px' />
                    <h4>Gemini</h4>
                    <p>Mercury is at home in Gemini, the sign it rules. Our communication and curiosity is at an all time high. 
                        We enjoy gaining small bits of knowledge on many subjects. We are also quite easily distracted. </p>
                    <Cancer height='80px' />
                    <h4>Cancer</h4>
                    <p>While Mercury is in Cancer, our thoughts are affected by our emotions. This can make staying objective more difficult. 
                        The information we take in, is taken in more deeply and more instinctively. 
                        Rather than taking in as much information as possible like Gemini, Cancer focuses more on the quality of the information. 
                    </p>
                    <Leo height='80px' />
                    <h4>Leo</h4>
                    <p>Mercury in Leo transits bring confidence in our communication. 
                        We are more theatrical, and do more grand story-telling during this time. We are more persuasive due to the boost in confidence.
                        However, our listening skills take a hit during this transit. </p>
                    <Virgo height='80px' />
                    <h4>Virgo</h4>
                    <p>Like Gemini, Mercury also feels at home here in Virgo since it also rules over this sign. 
                        Our thinking and our communication is precise during this transit. Details are handled with ease, but we can possibly get lost in them.
                        During this time we should be mindful of our communication being too factual, as it may result in coming across dry or overly critical.</p>
                    <Libra height='80px' />
                    <h4>Libra</h4>
                    <p>Mercury in Libra makes us more friendly and fair in our communication. We are more rational when it comes to relationships.
                        Quick decisions will not come easily during this time, and we may spend a lot of time weighing the options. 
                        This is a good time to consider other points of view for a change. 
                    </p>
                    <Scorpio height='80px' />
                    <h4>Scorpio</h4>
                    <p>During Mercury's transit through Scorpio, we seek truth. We tend to probe more, trying to uncover as much hidden information as possible.
                        We also favor having deep conversations. Be wary of your thoughts being so focused that they turn into obsession. 
                    </p>
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <p>While Mercury is in Sagittarius, our thinking is more optimistic and idealistic. 
                        We crave knowledge on many subjects rather than digging deeply into a single one.  </p>
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Our thinking is practical and methodical during Mercury's transit through Capricorn. 
                        We find it easy to concentrate on the task at hand and communcate with logic and organization. </p>
                    <Aquarius height='80px' />
                    <h4>Aquarius</h4>
                    <p>Aquarius in Mercury transits bring a thirst for knowledge. We are inventive and open to innovative and original ideas. 

                    </p>
                    <Pisces height='80px' />
                    <h4>Pisces</h4>
                    <p>Pisces transit brings out our imaginations. Our thinking is process is more visual, and use imagery to express ourselves. 
                        Thoughts are emotionally charged, and we are attracted to information that raises awareness. </p>
                </div>
            </>
        )
    }
}

export default MercuryTransit;