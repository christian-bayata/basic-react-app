import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        counters : [
            { id: 1, value : 4 },
            { id: 2, value : 0 },
            { id: 3, value : 0 },
            { id: 4, value : 0 },
        ]
    }

    handleDelete = (counterId) => {
      const removeCounterById = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters : removeCounterById });
    }

    render() { 
        return (
        <div>
        {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} id={counter.id} />)}
        </div>
        )
    }
}
 
export default Counters;