/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import NavBarry from './NavBarry';

class NewBeer extends Component {


    render () {

        return (
            <div>
                <NavBarry />
                <form onSubmit={this.props.onAdd}>
                    <input name="name" type="text" placeholder="Enter beer name"/>
                    <input name="tagline" type="text" placeholder="fancy tagline"/>                   
                    <input name="first_brewed" type="text" placeholder="first brewed"/>
                    <input name="brewers_tips" type="text" placeholder="Brew tips"/>
                    <input name="attenuation_level" type="number" placeholder="attenuation level"/>
                    <input name="contributed_by" type="text" placeholder="contributed by"/>
                <button type="submit" >add new beer</button>
            </form>
            </div>

        )
    }
}

export default NewBeer
