import React, { Component } from 'react';

class StarList extends Component {
    render() {
        return (
            <div className="StarList">
                <ul>
                    {this.props.starList.map(star => <li key={star.name}>{star.name} is {star.rad} in radius</li>)}
                </ul>
            </div>
        );
    }
}

export default StarList;