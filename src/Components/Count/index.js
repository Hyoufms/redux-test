import React, { Component } from 'react'

export default class Count extends Component {

    state = {count: 0}

    increment = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        const {count} = this.state;
        this.setState({count: count + valueInt})
    }
    decrement = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        const {count} = this.state;
        this.setState({count: count - valueInt})
    }
    incrementIfOdd = () => {
        const {count} = this.state;
        if (count % 2 !== 0) {
            const {value} = this.selectedNum;
            const valueInt = parseInt(value, 10);
            this.setState({count: count + valueInt})
        }
    }
    asyncIncrement = () => {    
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        const {count} = this.state;
        setTimeout(
            () => {this.setState({count: count + valueInt})}, 500
        )
    }

    render() {
        return (
            <div>
                <h1>sum: {this.state.count}</h1>
                <select ref={c => this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>incremennt if odd</button>&nbsp;
                <button onClick={this.asyncIncrement}>incremennt async</button>&nbsp;
            </div>
        )
    }
}
