import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactComponent as Neptune } from '../../icons/neptune.svg';

import NeptuneNatal from './NeptuneNatal';
import NeptuneTransit from './NeptuneTransit';

class NeptunePage extends Component {
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
                    <h1>Neptune</h1>
                    <Neptune height='80px' />
                    <br />
                    <br />
                    <p>Neptune info
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
                    <NeptuneNatal />
                    :
                    <NeptuneTransit />
                }
            </>
        )
    }
}

export default NeptunePage;