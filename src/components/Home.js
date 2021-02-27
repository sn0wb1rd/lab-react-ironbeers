/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Link} from  "react-router-dom";
import NavBarry from './NavBarry'
import BeerList from './BeerList';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import beerImg from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

class Home extends Component {

    render () {

        return (
            <div className="container my-3">
                <h1>The homepage</h1>

                <div className="card text-left">
                    <img src={beerImg} alt='beertap'/> 
                    <Link to='/beers' className='text-link pl-4 pt-2 pb-4'>
                        <h3 className="display-6 nounderline">All Beers</h3>
                        <article>
                        Beer is the third-most popular drink on Earth, after water and tea. Beer is by far the most popular alcoholic drink in the world. In 2016, people consumed nearly 50 billion gallons of beer worldwide.
                        </article>
                    </Link> 
                </div>

                <div className="card text-left">
                    <img src={randomBeer} alt='beertap'/> 
                    <Link to='/random-beer' className='text-link pl-4 pt-2 pb-4'>
                    <h3 className="display-6">The Beer List</h3>
                        <article>
                            The beer industry in the United States turns annual profits of over 100 billion dollars.
                        </article>               
                    </Link> 
                </div>

                <div className="card text-left">
                    <img src={newBeerImg} alt='beertap'/> 
                    <Link to='/new-beer' className='text-link pl-4 pt-2 pb-4'>
                        <h3 className="display-6">Add a new Beer!</h3>
                        <article>
                            In Medieval Europe, Catholic monks would often undergo "beer fasts" during the forty days of Lent. They ate no food, getting calories only from beer, which they called "liquid bread."
                        </article>  
                    </Link> 
                </div>

            </div>
        )
    } 
}

export default Home