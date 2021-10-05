import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value : this.props.value
    }


    handleIncrement = () => {
        this.setState({ value : this.state.value + 1 })
    }
 
    render() { 

        return (
            <div>
            <span className={this.getBadgeClasses()}>
                {this.modifyCount()}
            </span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counterId)} className="btn btn-danger btn-small m-2">Delete</button>
                   
            </div>
        )
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    modifyCount() {

        const { value } = this.state;
        return value === 0 ? 'Zero' : value;

    }
}
 
export default Counter;