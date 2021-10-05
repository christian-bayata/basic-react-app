import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return <div>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar
                <span className="badge bg-secondary m-2">{this.props.totalCounters}</span>
            </a>
            </div>
            </nav>
        </div>;
    }
}
 
export default Navbar;
