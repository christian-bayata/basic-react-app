import React, { Fragment, Component } from 'react'

import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

  state = {
    counters : [
        { id: 1, value : 4 },
        { id: 2, value : 0 },
        { id: 3, value : 0 },
        { id: 4, value : 0 },
    ]
}

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const num = counters.indexOf(counter)
    counters[num] = {...counter};
    counters[num].value++;
    this.setState({ counters });
}

handleReset = () => {
    let counter = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters: counter });
}

handleDelete = (counterId) => {
  const removeCounterById = this.state.counters.filter(c => c.id !== counterId);
  this.setState({ counters : removeCounterById });
}

  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container-fluid">
          <Counters 
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            />
        </main>
      </Fragment> 
    );
  }
  
}

export default App;
