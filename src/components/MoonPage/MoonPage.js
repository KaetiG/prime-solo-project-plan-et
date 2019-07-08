import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import MoonTransits from './MoonTransits'
import MoonNatal from './MoonNatal'

class MoonPage extends Component {
state = {
    isNatalActive: false
}

    componentDidMount(){
    console.log(this.state.isNatalActive)
}
    render() {
        return (
            <>
                <h1>Moon</h1>
                {/* image icon here */}
                <p>The Moon represents your emotional self.
                    It transits through the signs quickly, completing its cycle approximately every 28 days.
                    It rules over Cancer and its element is Water.
                    Your Natal Moon sign represents how your emotions and subconscious manifest in your personality,
                    whereas the moon's transits through each sign will influence how you face daily life
            </p>
                <BootstrapSwitchButton
                    checked={false}
                    onlabel='Transit'
                    offlabel='Natal'
                    onstyle="outline-info" 
                    offstyle="outline-info"
                    width={100}
                    onChange={(checked: boolean) => {
                        this.setState({ isNatalActive: checked })
                        console.log(this.state)
                    }}
                />
                {this.state.isNatalActive === false 
                ? 
                <MoonNatal />
                :
                <MoonTransits />
                }
            </>
        )
    }
}

export default MoonPage;