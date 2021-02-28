/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';

class RandomBeer extends Component {

    render () {
        console.log('RENDER | Random beer ---------')

        return (
            <div className="card text-left">
                <NavBarry />  
                <h1>page: Random beer</h1>
            </div>
        )
    }
}


export default RandomBeer