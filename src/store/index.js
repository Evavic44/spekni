import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './users/reducer'

const combinedReducer = combineReducers({
  user,
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: action.payload
    }
    return nextState
  }
  else {
    return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore);
