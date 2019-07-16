import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Mercury } from '../../icons/mercury.svg';

import MercuryNatal from './MercuryNatal';
import MercuryTransit from './MercuryTransit';

class MercuryPage extends Component {
    state = {
        isNatalActive: false

    }

    // componentDidMount() {
    //     console.log(this.state.isNatalActive)
    // }
    render() {
        return (
            <>
                <div className="planetPageDiv">
                    <h1>Mercury</h1>
                    <Mercury height='80px' />
                    <br />
                    <br />
                    <p>Mercury represents communication, thinking, rationality, reasoning; pretty much all things mental. 
                        It rules both Gemini and Virgo, as well as the Third House.
                    </p>
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="Choose Planet">
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
                        className="natalTransitToggle"
                        checked={false}
                        onlabel='Transit'
                        offlabel='Natal'
                        onstyle="secondary"
                        offstyle="secondary"
                        width={100}
                        onChange={(checked: boolean) => {
                            this.setState({ isNatalActive: checked })
                        }}

                    />
                </div>
                <br />

                {this.state.isNatalActive === false
                    ?
                    <MercuryNatal />
                    :
                    <MercuryTransit />
                }
            </>
        )
    }
}

export default MercuryPage;