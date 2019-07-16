import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Jupiter } from '../../icons/jupiter.svg';

import JupiterNatal from './JupiterNatal';
import JupiterTransit from './JupiterTransit';

class JupiterPage extends Component {
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
                    <h1>Jupiter</h1>
                    <Jupiter height='80px' />
                    <br />
                    <br />
                    <p>Jupiter represents luck and how one attains success and wealth in their lives. 
                        It rules over Sagittarius and the Ninth House. 
                        Jupiter and the rest of the outer planets transit through the signs very slowly, 
                        thus their influences on the signs are not as detailed as the planets closest to Earth/the Sun.
                    </p>
                    <br />
                    <DropdownButton id="dropdown-basic-button" title="Choose Planet">
                        <Dropdown.Item className="dropDownItem" href="#/planets/sun">Sun</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/mercury">Mercury</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/venus">Venus</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/mars">Mars</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/jupiter">Jupiter</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/saturn">Saturn</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/neptune">Neptune</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/uranus">Uranus</Dropdown.Item>
                        <Dropdown.Item className="dropDownItem" href="#/planets/pluto">Pluto</Dropdown.Item>
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
                    <JupiterNatal />
                    :
                    <JupiterTransit />
                }
            </>
        )
    }
}

export default JupiterPage;