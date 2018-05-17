import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className="Introduction">
                <p>The new star is {this.props.newStar.name} which has a radius of {this.props.newStar.rad}.</p>
            </div>
        );
    }
}

export default Introduction;