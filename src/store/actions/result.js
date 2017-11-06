import * as actionTypes from './actionTypes';

// action creators functions

export const saveResult = (payload) => { // we can put more logic into functioncreators
  // const updatePayload = payload * 5;  // retutn{payload:updatePayload} example
  return {
    type: actionTypes.STORE_RESULT,
    payload: payload    // same as pass = (res) => {result: res}
  };
}


// return dispatch for run async code with redux-think
export const storeResult = (payload) => {  // For use async dispatch saveResult in storeResult
  return (dispatch) => {                         
    setTimeout(() => {
      dispatch(saveResult(payload));                            // here we can dispatch any action what we want to dispatch
        }, 2000);
  }
};

export const deleteResult = (payload) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: payload    // same as pass = (res) => {result: res}
  };
};


// Additional think option

// return dispatch for run async code with redux-think
// export const storeResult = (payload) => {  // For use async dispatch saveResult in storeResult
//   return (dispatch, getState) => {                         
//     setTimeout(() => {
//       const oldCounter = getState().ctr.counter;  // get initioal state
//       console.log(oldCounter);
//       dispatch(saveResult(payload));                            // here we can dispatch any action what we want to dispatch
//         }, 2000);
//   }
// };