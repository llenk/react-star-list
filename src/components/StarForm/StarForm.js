import React, { Component } from 'react';

class StarForm extends Component {

  render() {
    return (
      <div className="StarForm">
        <form onSubmit={this.props.handleSubmit}>
          <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} type="text" placeholder="name" />
          <input value={this.props.newStar.rad} onChange={this.props.handleChangeFor('rad')} type="text" placeholder="radius" />
          <p><input type="submit" /></p>
        </form>
      </div>
    );
  }
}

export default StarForm;
