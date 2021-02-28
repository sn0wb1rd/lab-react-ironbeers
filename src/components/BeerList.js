/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';

class BeerList extends Component {


    render () {

        return (
            <div>
                <NavBarry />            
                <h3 className="display-6">page: The Beer List</h3>
            </div>
        )        
    } 
}


export default BeerList