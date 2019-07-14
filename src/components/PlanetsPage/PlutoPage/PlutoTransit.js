import React, { Component } from 'react';


import { ReactComponent as Capricorn } from '../../icons/capricorn.svg';


class PlutoTransit extends Component {
    render(){
        return(
            <>
            <div className="natalTransitDiv">
                    <Capricorn height='80px' />
                    <h4>Capricorn</h4>
                    <p>Pluto will reside in Capricorn until 2024. <br />
                    Pluto transits help us look within ourselves, and confront what ever darkness is hindering our growth. 
                    While in Capricorn the focus will be on subjects like status, our sense of security, our material resources, finances, and power.</p>
                  
                </div>
            </>
        )
    }
}

export default PlutoTransit;