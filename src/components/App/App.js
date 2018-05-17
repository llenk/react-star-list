import React, { Component } from 'react';
import Introduction from '../Introduction/Introduction';
import StarList from '../StarList/StarList';
import StarForm from '../StarForm/StarForm';

const emptyStar = {
  name: '',
  rad: '',
}

class App extends Component {

  constructor(props) {
    super(props);



    this.state = {
      newStar: emptyStar,
      starData: [
        { name: 'Menkar', rad: '89 suns', },
        { name: 'Kochab', rad: '42 suns', },
        { name: 'Hadar', rad: '8.6 suns, I guess,', },
      ],
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeFor = propertyName => event => {
    // this.state.user[propertyName] = event.target.value;
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starData: [...this.state.starData, this.state.newStar],
    });
    this.setState({
      newStar: emptyStar,
    });
  }

  render() {
    return (
      <div className="App">
        <Introduction newStar={this.state.newStar}/>
        <StarForm newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmit={this.handleSubmit} />
        <StarList starList={this.state.starData} />
      </div>
    );
  }
}

export default App;
