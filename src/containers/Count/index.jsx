import React, { Component } from 'react';

import {
    createIncrementAction, 
    createDecrementAction, 
    createAsyncIncrementAction
} from "../../redux/actions/count"
import { connect } from "react-redux"; // for connecting container and UI

//#region 
// the object returned will be consider as the key and value of props - state
/*function mapStateToProps(state) {
    return {count:state}
}*/

//  the object returned will be consider as the key and value of props - method for manipulate state
/*function mapDispatchToProps(dispatch) {
    return {
        increment: data => dispatch(createIncrementAction(data)),
        decrement: data => dispatch(createDecrementAction(data)),
        asyncIncrement: data => dispatch(createAsyncIncrementAction(data, 500))
    }
}*/
//#endregion
//create and export a container for count

class Count extends Component {

    increment = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        this.props.increment(valueInt)
        
    }

    decrement = () => {
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        this.props.decrement(valueInt)
    }
    
    incrementIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            const {value} = this.selectedNum;
            const valueInt = parseInt(value, 10);
            this.props.increment(valueInt)
        }
    }

    asyncIncrement = () => {    
        const {value} = this.selectedNum;
        const valueInt = parseInt(value, 10);
        this.props.asyncIncrement(valueInt, 500)
    }

    render() {
        return (
            <div>
                <h1>sum: {this.props.count}</h1>
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

export default connect(
    state => ({count:state}), 
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        asyncIncrement: createAsyncIncrementAction
    }
)(Count);
