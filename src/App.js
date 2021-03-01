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
    randomBeerId: 0
  }   

  // Get al the beers for the beerlist page

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


  
  render () {   
    const {beerList} = this.state
    let randomBeerId = Math.floor(Math.random() * Math.floor(beerList.length))
    
    console.log('random id: ',randomBeerId )
    console.log('lenth: ',beerList.length )
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
                return <NewBeer />
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
