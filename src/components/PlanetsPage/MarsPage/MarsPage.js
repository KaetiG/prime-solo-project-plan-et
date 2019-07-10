import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Mars } from '../../icons/mars.svg';

import MarsNatal from './MarsNatal';
import MarsTransit from './MarsTransit';

class MarsPage extends Component {
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
                    <h1>Mars</h1>
                    <Mars height='80px' />
                    <br />
                    <br />
                    <p>Mars represents one's assertion and impulsive tendancies. It also represents one's sexuality. 
                        Mars is the masculine side of relationships whereas Venus represents the feminine side. 
                        Mars rules over Aries and the First House.
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
                    <MarsNatal />
                    :
                    <MarsTransit />
                }
            </>
        )
    }
}

export default MarsPage;