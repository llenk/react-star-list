import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      starData: [
        {name: 'Menkar', rad: '89 suns',},
        {name: 'Kochab', rad: '42 suns',}, 
        {name: 'Hadar', rad: '8.6 suns, I guess,',},
      ],
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let starArray = this.state.starData.map(star=><li key={star.name}>{star.name} is {star.rad} in radius</li>);
    return (
      <div className="App">
        <ul>
          {starArray}
        </ul>
      </div>
    );
  }
}

export default App;
