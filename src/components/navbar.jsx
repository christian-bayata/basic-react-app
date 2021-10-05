import React, { Component } from 'react';

const Navbar = (props) => {
    return (  
        <div>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar
                <span className="badge bg-secondary m-2">{props.totalCounters}</span>
            </a>
            </div>
            </nav>
        </div>
    );
}
 
export default Navbar;
