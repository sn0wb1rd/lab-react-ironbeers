/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';
import SingleBeer from './SingleBeer'

class RandomBeer extends Component {

    render () {
        console.log('RENDER | Random beer ---------')
        // fetching data for generating random beerId's 
        const {randomBeerId, beerLength} = this.props
        console.log('in random ', randomBeerId, beerLength)
        console.log(this.props)

        return (            
            <div className="card text-left">
                <h1>page: Random beer</h1>
                {/* <SingleBeer 
                    randomBeerId={randomBeerId}
                    beerLength={beerLength}                   
                /> */}
            </div>
        )
    }
}


export default RandomBeer