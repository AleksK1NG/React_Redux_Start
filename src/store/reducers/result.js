import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    results: [],
    title: 'Counter App'
};

// Functions for more lean code
// Example

// const deleteResult = (state, action) => {   // name like DELETE_RESULT but camelCase
//   const updatedArray = state.results.filter(result => result.id !== action.payload);
//   return updateObject(state, {results: updatedArray});
// };


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            // Change data
            // return updateObject(state, {results: state.results.concat({id: new Date(), value: action.payload})});
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.payload})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.payload);
            return {
                ...state,
                results: updatedArray
            }
            // return deleteResult(state, action); // for example of lean function
    }
    return state;
};

export default reducer;