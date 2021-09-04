import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


class Palette extends Component {

    render() {
        // This creates the individual instances of ColorBox components
        const colorBoxes = this.props.palette.colors[450].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))

        return (
            <div className="Palette">
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
