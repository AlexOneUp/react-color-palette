import React, { Component } from 'react';


class Palette extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Palette">
                {/* Navbar here */}
                <div className="Palette-colors">{/* color boxes  */}</div>
            </div>
        )
    }
}

export default Palette
