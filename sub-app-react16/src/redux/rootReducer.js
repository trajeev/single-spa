import {combineReducers} from 'redux'

import {formReducer} from './form/form.reducer'

const rootReducer = combineReducers({
    forms: formReducer
})

export default rootReducer