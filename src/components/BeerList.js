/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';
import axios from 'axios';
import {Link} from  "react-router-dom";
import SingleBeer from './SingleBeer';
import Home from './Home';
import { Route, Switch, withRouter } from  "react-router-dom";


class BeerList extends Component {

    state = {
        beerList: []
    }   

    getBeerList = () => {
        console.log('getBeerList | BeerList ---------')
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {       
            this.setState({
                beerList: response.data
            })         
        })
        .catch((err) => {
            console.log('Error while getting the beers (Beerlist | cDM): ', err)
        })
    }

   componentDidMount(){
        console.log('cDM | BeerList ---------')
        this.getBeerList()       
   } 

    render () {
        console.log('RENDER | BeerList ---------')
        const {beerList} = this.state
        let beerId = ''
        
        return (
            <div className="container">
                <NavBarry />            
                <h3 className="display-6">page: The Beer List</h3>
       
                {
                    beerList.map((oneBeer, index) => {
                        beerId = oneBeer["_id"]            
                         return (
                             <div key={index} className='card text-link pl-4 pt-2 pb-4'>
                             <Link to={`/beers/${beerId}`}>
                                <div >
                                    <span> 
                                    <img src= {oneBeer["image_url"]} alt="Preview Beer"  />
                                    </span>
                                    <span className="text-left">
                                        <h2>{oneBeer["name"]}</h2>  
                                        <h5>{oneBeer["tagline"]}</h5>   
                                        <p>{oneBeer["contributed_by"]}</p> 
                                        <p>{oneBeer["_id"]}</p> 
                                    </span>  
                                </div>

                             </Link> 
                             {/* Does not work? 
                             <Route path="/5fb6a86265b9c209606e10e0" render={(routeProps) => {
                                    return <SingleBeer
                                                             
                                    />
                                }}
                                /> */}
                            </div>
                                    
                            
                        )
                    }) 
                }


            </div>
        )        
    } 
}


export default BeerList