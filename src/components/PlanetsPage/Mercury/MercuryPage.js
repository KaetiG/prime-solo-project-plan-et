import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import { ReactComponent as Sun } from '/icons/sun2.svg';

class MercuryPage extends Component {
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
                    <h1>Sun</h1>
                    {/* <Sun height='80px' /> */}
                    <br />
                    <br />
                    {/* image icon here */}
                    <p>The Sun represents your main outward personality.
                        It is your ego, and the main driving force behind your actions and what makes you, you.
                        The Sun transits through one sign per month, and is often referred to as that sign's "season".
                    </p>
                    <br />
                                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                    <Dropdown.Item href="#/planets/sun">Sun</Dropdown.Item>
                                    <Dropdown.Item href="#/planets/venus">Venus</Dropdown.Item>
                                    <Dropdown.Item href="#/planets/mars">Mars</Dropdown.Item>
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
                    <p>natal</p>
                    //<MoonNatal />
                    :
                    <p>transit</p>
                    //<MoonTransits />
                }
            </>
        )
    }
}

export default MercuryPage;