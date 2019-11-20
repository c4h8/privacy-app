import * as types from './actionTypes';

export const addService = (name) => ({
  type: types.ADD_SERVICE,
  payload: name
})

export const removeService = (name) => ({ 
  type: types.REMOVE_SERVICE,
  payload: name
})
