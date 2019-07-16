import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Sun } from '../../icons/sun2.svg';

import SunNatal from './SunNatal'
import SunTransit from './SunTransit';

class SunPage extends Component {
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
                    <h1>Sun</h1>
                    <Sun height='80px' width="80" />
                    <br />
                    <br />
                    <p>The Sun represents your main outward personality.
                        It is your ego, and the main driving force behind your actions and what makes you, you.
                        The Sun transits through one sign per month, and is often referred to as that sign's "season".
                        It rules over Leo and the Fifth House.
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
                        id="natalTransitToggle"
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
                    <SunNatal />
                    :
                    <SunTransit />
                }
            </>
        )
    }
}

export default SunPage;