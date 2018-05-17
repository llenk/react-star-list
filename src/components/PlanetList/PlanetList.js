import React, { Component } from 'react';

class PlanetList extends Component {
    render() {
        return (
            <div>
                <h1>
                    STAR WARS PLANETS YOU BET YOUR LIFE
                </h1>
                <ul>
                    {this.props.planets.map(pl => <li key={pl}>{pl}</li>)}
                </ul>
            </div>
        );
    }
}

export default PlanetList;
