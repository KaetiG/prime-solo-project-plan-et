import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Saturn } from '../../icons/saturn-sign.svg';

import SaturnNatal from './SaturnNatal';
import SaturnTransit from './SaturnTransit';

class SaturnPage extends Component {
    state = {
        isNatalActive: false

    }

    componentDidMount() {
        console.log(this.state.isNatalActive)
    }
    render() {
        return (
            <>
                <div className="planetPageDiv">
                    <h1>Saturn</h1>
                    <Saturn height='80px' />
                    <br />
                    <br />
                    <p>Saturn represents restriciton, responsibility, and limitation. It brings structure and promotes self control. 
                        Saturn rules over Capricorn and the Tenth House.
                    </p>
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/planets/sun">Sun</Dropdown.Item>
                        <Dropdown.Item href="#/planets/mercury">Mercury</Dropdown.Item>
                        <Dropdown.Item href="#/planets/venus">Venus</Dropdown.Item>
                        <Dropdown.Item href="#/planets/mars">Mars</Dropdown.Item>
                        <Dropdown.Item href="#/planets/jupiter">Jupiter</Dropdown.Item>
                        <Dropdown.Item href="#/planets/saturn">Saturn</Dropdown.Item>
                        <Dropdown.Item href="#/planets/neptune">Neptune</Dropdown.Item>
                        <Dropdown.Item href="#/planets/uranus">Uranus</Dropdown.Item>
                        <Dropdown.Item href="#/planets/pluto">Pluto</Dropdown.Item>
                    </DropdownButton>
                    <br />
                    <BootstrapSwitchButton
                        id="natalTransitToggle"
                        checked={false}
                        onlabel='Transit'
                        offlabel='Natal'
                        onstyle="info"
                        offstyle="info"
                        width={100}
                        onChange={(checked: boolean) => {
                            this.setState({ isNatalActive: checked })
                            console.log(this.state)
                        }}

                    />
                </div>
                <br />

                {this.state.isNatalActive === false
                    ?
                    <SaturnNatal />
                    :
                    <SaturnTransit />
                }
            </>
        )
    }
}

export default SaturnPage;