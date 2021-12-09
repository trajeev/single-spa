import {createStore, applyMiddleware} from 'redux'

import rootReducer from './rootReducer'

const middleware = []

let store = createStore(rootReducer, applyMiddleware(...middleware))

export default store