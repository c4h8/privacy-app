import * as types from './actionTypes';
import data from './Data/locationData'
import services from '.'

const initialState = {
  connectedServices: []
}

function handleAddService(state, payload) {
  const newService = !state.connectedServices.find(s => s.name === payload) && data.find(s => s.name === payload)
  if(newService)
    return  {...state, connectedServices: [...state.connectedServices, newService]}
  return state
}

function handleRemoveService(state, payload) {
  return {...state, connectedServices: [...state.connectedServices.filter(s => s.name !== payload)]}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_SERVICE:
      return handleAddService(state, action.payload)
    case types.REMOVE_SERVICE:
      return handleRemoveService(state, action.payload)
    default:
      return state
  }
}

export default reducer
