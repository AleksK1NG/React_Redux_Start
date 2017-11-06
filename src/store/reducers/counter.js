import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility'; // import Utility function for leaner code

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);   // Object.assign way
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,                          // ...spread way
                counter: state.counter - 1
            }
        case actionTypes.ADD:  // Use Utility for leaner code
            return updateObject(state, {counter: state.counter + action.payload})
            // return {
            //     ...state,
            //     counter: state.counter + action.payload
            // }
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.payload});  // state = oldObject, counter = updatedValue
            // return {
            //     ...state,
            //     counter: state.counter - action.payload
            // }
    }
    return state;
};

export default reducer;