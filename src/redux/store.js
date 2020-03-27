import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import peopleReducer from './reducers/peopleReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const configureStore = createStoreWithMiddleware(peopleReducer)

export default configureStore