import React, { Component } from 'react';
import axios from 'axios';
import Introduction from '../Introduction/Introduction';
import StarList from '../StarList/StarList';
import StarForm from '../StarForm/StarForm';
import PlanetList from '../PlanetList/PlanetList';

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
      planets: [],
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

  componentDidMount = () => {
    this.requestPlanets(1);
  }

  requestPlanets = (page) => {
    axios({
      method: 'GET',
      url: 'https://swapi.co/api/planets/?page='+page+'&format=json',
    }).then((response) => {
      const planets = response.data.results;
      this.addPlanets(planets);
      if(response.data.next) {
        this.requestPlanets(page+1);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  addPlanets = (planets) => {
    for (let i = 0; i < planets.length; i++) {
      this.setState({
        planets: [...this.state.planets, planets[i].name],
      });
      // console.log(planets[i].name);
    }
  }

  render() {
    return (
      <div className="App">
        <Introduction newStar={this.state.newStar} />
        <StarForm newStar={this.state.newStar} handleChangeFor={this.handleChangeFor} handleSubmit={this.handleSubmit} />
        <StarList starList={this.state.starData} />
        <PlanetList planets={this.state.planets} />
      </div>
    );
  }
}

export default App;
