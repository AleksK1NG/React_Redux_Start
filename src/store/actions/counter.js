import * as actionTypes from './actionTypes';

// action creators functions

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (payload) => {
  return {
    type: actionTypes.ADD,
    payload: payload
  };
};

export const subtract = (payload) => {
  return {
    type: actionTypes.SUBTRACT,
    payload: payload
  };
};