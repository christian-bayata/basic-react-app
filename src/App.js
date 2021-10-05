import React, { Fragment, Component } from 'react'


import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container-fluid">
          <Counters />
        </main>
      </Fragment> 
    );
  }
  
}

export default App;
