import React, { Component } from 'react';

import { ReactComponent as Capricorn } from '../../icons/capricorn.svg';


class SaturnTransit extends Component {
    render() {
        return (
            <>
                <div className="natalTransitDiv">
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Saturn is in its home sign of Capricorn until March 2019.</p>
                    <br />
                    <blockquote class="blockquote" className="transitBlockQuote">The global patriarchy could meet its limits—or press for a takeover. 
                        Both Saturn and Capricorn rule men, fathers, authority, banks, the economy, government, corporations and big industry. 
                        These are the areas that will come under scrutiny, as Saturn’s magnifying glass surveys for flaws in the foundation of leadership and large entities.
                        Saturn returns to Capricorn every 28-30 years, staying for about three years each time. 
                        Its imprint on history is indelible, tearing down outmoded structures and revealing some of the worst corruptions among world leadership. 
                        Saturn was last in Capricorn from February 13 to June 9, 1988 and then November 11, 1988 to February 6, 1991.
                        On a positive note, Saturn in Capricorn could restore order to our out-of-control world by instituting policies that protect human rights—or dismantling laws that oppress us. 
                        Important regulations could be imposed on big businesses that are polluting our planet, causing climate change and melting polar ice caps. 
                        Saturn rules harsh lessons and wakeup calls, so here’s hoping that it doesn’t take anything drastic to force our hand.
                        <footer class="blockquote-footer">Astrostyle.com</footer></blockquote>
                </div>
            </>
        )
    }
}

export default SaturnTransit;