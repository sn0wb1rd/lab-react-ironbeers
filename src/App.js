/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { Route, Switch, withRouter } from  "react-router-dom";
import './App.css';
import Home from './components/Home';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';

class App extends Component {

  state = {
    beerList: [],
    // randomBeerId: 0
  }   

  // Get al the beers for the beerlist page
// does not work for passing vars to single beers...
 componentDidMount(){
    console.log('cDM | App ---------')
    // getting all the beers
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {       
        this.setState({
            beerList: response.data,
        })         
    })
    .catch((err) => {
        console.log('Error while getting the beers (Beerlist | cDM): ', err)
    })
  } 

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let tagline = event.target.tagline.value
    let first_brewed = event.target.first_brewed.value
    let brewers_tips = event.target.brewers_tips.value
    let attenuation_level = event.target.attenuation_level.value
    let contributed_by = event.target.contributed_by.value

    axios.post(('https://ih-beers-api2.herokuapp.com/beers/new'), {
      name: "test",
      tagline: "test", 
      first_brewed: "test",
      brewers_tips: "test",
      attenuation_level: 16,
      contributed_by: "John Doe"
    
      // name: name,
      // tagline: tagline, 
      // first_brewed: first_brewed,
      // brewers_tips: brewers_tips,
      // attenuation_level: attenuation_level,
      // contributed_by:contributed_by

    })
      .then((response) => {
        console.log('new object ', response)
        console.log('(old) beerlist ', [...this.state.beerList].length)
        this.setState({
          beerList: [response.data, ...this.state.beerList]
        })
        console.log('(new) beerlist  ', [...this.state.beerList].length)
      })
      .catch((err) => {
        console.log('err while creating a beer ', err)
      })
  }
  
  
  render () {   
    const {beerList, randomBeerId} = this.state
    
        return (
          <div className="The App">
            <Switch>
              <Route exact path="/" render={() => {
                return <Home />
              }}
              /> 
              <Route exact path="/beers" render={() => {
                return <BeerList 
                  beerList={beerList}
                />
              }}
              />
              <Route path="/random-beer" render={() => {
                return <SingleBeer 
                  randomBeerId={randomBeerId} 
                  beerLength={beerList.length} 
                />
              }}
              />
              <Route path="/new-beer" render={() => {
                return <NewBeer onAdd={this.handleSubmit}/>
              }}
              />
              <Route path="/beers/:beerId" render={(routeProps) => {
                  return <SingleBeer 
                  match={routeProps.match.params}   
                  />
              }}
              />

            </Switch>   
          </div>
        );
  } 
}


export default withRouter(App);
