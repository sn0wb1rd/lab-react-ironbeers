/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';
import axios from 'axios';
import {Link} from  "react-router-dom";

class BeerList extends Component {

    state = {
        beerList: []
    }   

    getBeers = () => {
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
        this.getBeers()       
   } 

    render () {
        console.log('RENDER | BeerList ---------')
        const {beerList} = this.state
        
        return (
            <div>
                <NavBarry />            
                <h3 className="display-6">page: The Beer List</h3>
       
                {
                    beerList.map((oneBeer, index) => {
                         return (
                             <Link to='/beers/:id' key={index} className='text-link pl-4 pt-2 pb-4'>
                                <div className="card text-left " >
                                    <span> 
                                    <img src= {oneBeer["image_url"]} alt="Preview Beer"  />
                                    </span>
                                    <span>
                                        <h2>{oneBeer["name"]}</h2>  
                                        <h5>{oneBeer["tagline"]}</h5>   
                                        <p>{oneBeer["contributed_by"]}</p> 
                                    </span>  
                                </div>
                             </Link>


          
                            
                        )
                    }) 
                }


            </div>
        )        
    } 
}


export default BeerList