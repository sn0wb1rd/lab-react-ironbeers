/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { Route, Switch, withRouter } from  "react-router-dom";
import './App.css';
import Home from './components/Home';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


class App extends Component {
  
  
  render () {
        return (
          <div className="The App">
            <Switch>
              <Route exact path="/" render={() => {
                return <Home />
              }}
              /> 
              <Route path="/beers" render={() => {
                return <BeerList />
              }}
              />
              <Route path="/random-beer" render={() => {
                return <RandomBeer />
              }}
              />
              <Route path="/new-beer" render={() => {
                return <NewBeer />
              }}
              />
            </Switch>   
          </div>
        );
  } 
}


export default withRouter(App);
