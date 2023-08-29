import React, { Component } from 'react';
//store is ustilized to acquire the state seved in redux object
import store from '../../redux/store';
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

    //state = {count: 0}

    increment = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        store.dispatch(createIncrementAction(valueInt))
    }

    decrement = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        store.dispatch(createDecrementAction(valueInt))
    }
    
    incrementIfOdd = () => {
        const count = store.getState();
        if (count % 2 !== 0) {
            const {value} = this.selectedNum;
            const valueInt = parseInt(value, 10);
            store.dispatch(createIncrementAction(valueInt))
        }
    }
    asyncIncrement = () => {    
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        setTimeout(
            () => {store.dispatch(createIncrementAction(valueInt))}, 500
        )
    }

    render() {
        return (
            <div>
                <h1>sum: {store.getState()}</h1>
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
