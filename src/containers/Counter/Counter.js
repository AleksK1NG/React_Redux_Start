import * as actionCreators from '../../store/actions/index'; // import all functions as (value) => actionCreators.funcName(payload)

import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    render () {
        return (
            <div> 
            <h1> {this.props.myTitle} </h1>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(item => (
                        <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
        myTitle: state.res.title
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),  //dispatch function from actions
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)), // result = (this.props.ctr) = ctr: state.ctr.counter,
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))  // id = (item.id) of this.props.storedResults.map
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);