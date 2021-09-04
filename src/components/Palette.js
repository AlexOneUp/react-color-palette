import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;

        // This creates the individual instances of ColorBox components
        const colorBoxes = colors[this.state.level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))

        return (
            <div className="Palette">
                <NavBar level={level} changeLevel={this.changeLevel} />

                {/* Navbar here */}
                <div className="Palette-colors">
                    {/* color boxes  */}
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
