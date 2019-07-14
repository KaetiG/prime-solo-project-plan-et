import React, { Component } from 'react';

import { ReactComponent as Sagittarius } from '../../icons/sagittarius.svg';


class JupiterTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    
                    <Sagittarius height='80px' />
                    <h4>Sagittarius</h4>
                    <blockquote class="blockquote" className="transitBlockQuote">Jupiter is in its home sign of Sagittarius until December 2nd, 2019.<br/>
                    Jupiter’s effects are to expand our experiences, our knowledge, and our understanding. 
                    Jupiter represents optimism, growth, generosity, and abundance. 
                    In Scorpio, Jupiter expanded our awareness of our intimate relationships, personal power, and coping skills. 
                    Now, with Jupiter in Sagittarius, a new focus comes into play. 
                    Jupiter’s transit through the sign that it rules, fiery Sagittarius, urges us to increase our cultural and spiritual awareness, to expand our higher minds, to broaden our experiences, and to have faith in the universe.
                    As Jupiter moves through Sagittarius, we deepen our interest in philosophical, and perhaps religious, thought, and determine what it is that gives us joy–what truly is important in our lives in the long run. 
                    We trust in something higher than us, and this gives us a sense that we are doing the right thing and that we are spiritually protected–“things will work out” is the overall attitude now.
                    <footer class="blockquote-footer">cafeastrology</footer></blockquote>
                    
                </div>
            </>
        )
    }
}

export default JupiterTransit;