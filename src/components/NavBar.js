import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
    render() {
        const { level, changeLevel } = this.props;

        return (
            <div>
                <header className="Navbar">
                    <div className="logo">
                        <a href='#'>
                            Color Picker
                        </a>
                    </div>
                    <div className='slider-container'>
                        <span>Level: {level}</span>
                    </div>

                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={0}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} />
                    </div>
                </header>

            </div>
        )
    }
}

export default NavBar
