module.exports = `import { createStore, combineReducers, applyMiddleware } from 'redux'
 import ReduxThunk from 'redux-thunk'
 const initialState = {}

const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state
    default:
      return state
  }
}

export default createStore(
  combineReducers({
    app: appReducer
  }),
  applyMiddleware(
    ReduxThunk
  )
)`