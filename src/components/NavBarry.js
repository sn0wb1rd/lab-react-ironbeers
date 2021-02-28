/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import Home from './Home'

class NavBarry extends Component {



    render () {

        return (
            <Link to='/' >
                <header className="navbar custom-bg-blue justify-content-center py-3 mb-2">  
                {/* home logo bootstrap */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill text-center" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                    </svg>        
                </header>                        
            </Link>               
        )
    }
}

export default NavBarry