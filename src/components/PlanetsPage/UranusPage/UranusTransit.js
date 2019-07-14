import React, { Component } from 'react';

import { ReactComponent as Taurus } from '../../icons/taurus.svg';


class UranusTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Taurus height='80px' />
                    <h4>Taurus</h4>
                    <p>Uranus is in Taurus until 2025.<br />
                    Taurus rules money, so that will be the focus of this transit. 
                    The last time Uranus was in Taurus, we were in the midst of the Great Depression. 
                    This resulted in The New Deal and Social Security being put into action. 
                    For Uranus' return to Taurus, we can expect huge changes to the way we handle finances. 
                    We are already seeing a shift in economics through crypto-currency and cash becoming less and less used by the majority public.
                    </p>
                </div>
            </>
        )
    }
}

export default UranusTransit;