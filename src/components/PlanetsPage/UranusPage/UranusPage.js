import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Uranus } from '../../icons/uranus-sign.svg';

import UranusNatal from './UranusNatal';
import UranusTransit from './UranusTransit';

class UranusPage extends Component {
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
                    <h1>Uranus</h1>
                    <Uranus height='80px' width="80" />
                    <br />
                    <br />
                    <p>Uranus info
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
                        onstyle="secondary"
                        offstyle="secondary"
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
                    <UranusNatal />
                    :
                    <UranusTransit />
                }
            </>
        )
    }
}

export default UranusPage;