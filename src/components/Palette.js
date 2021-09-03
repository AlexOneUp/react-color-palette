import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';


class Palette extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
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
