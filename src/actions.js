import * as types from './actionTypes';

export const addService = (name) => ({
  type: types.ADD_SERVICE,
  payload: name
})

export const removeService = (name) => ({ 
  type: types.REMOVE_SERVICE,
  payload: name
})

export const sendRemoveDataRequest = (name) => ({
  type: types.SEND_REMOVE_DATA_REQUEST,
  payload: name
})
