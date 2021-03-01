/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';
import axios from 'axios';

class SingleBeer extends Component {

    state = {
        beer:  {},
    }   

    getSingleBeers = () => {
        console.log('getSingleBeers | SingleBeer ---------')

        let Endpoint 
        let id
        if (!this.props.match) {
            Endpoint = "https://ih-beers-api2.herokuapp.com/beers/random"
       } else {
           id = this.props.match.beerId
           Endpoint = `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.beerId}`
       }           

        axios.get(Endpoint)
        .then((response) => { 
            let beer = {
                image: response.data.image_url,
                name: response.data.name,
                tagline: response.data.tagline,
                first_brewed: response.data.first_brewed,
                attenuation_level: response.data.attenuation_level,
                description: response.data.description,
                contributed_by: response.data.contributed_by,
            }                       
            this.setState({
                beer: beer,
                beerLength: this.props.beerLength
            })         
        })
        .catch((err) => {
            console.log('Error while getting the beers (Beerlist | cDM): ', err)
        })
    }
    
    componentDidMount(){
        console.log('cDM | Singebeer ---------')
        console.log('props boven ', this.props)
        this.getSingleBeers()    
       }

    render () {
        console.log('RENDER | Singlebeer ---------')
        console.log('props onder ', this.props)
        const {image, name, tagline, first_brewed, attenuation_level ,description, contributed_by} = this.state.beer

        return (
            <div className="container">
                <NavBarry /> 
                <div className="justify-content-center">
                     <img src={image} className="align-center w-25" alt='beer preview'/>
                </div> 
               {

               }
                <div className="text-left">
                    <h2>{name}</h2>  
                    <p><span className="card-title">{name}</span>{attenuation_level}</p>
                    <p><span>{tagline}</span>{first_brewed}</p>                
                    <p>{description}</p>
                    <p>{contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default SingleBeer