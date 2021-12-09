import { FormActionTypes } from "./form.types";

const INITIAL_STATE = {
    forms: []
}

export const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FormActionTypes.ADD_FORM: 
            return {
                ...state,
                forms: state.forms.concat(action.payload)
            }
        case FormActionTypes.REMOVE_FORM: 
            return {
                ...state,
                // forms: state.forms.filter((form, i) => form.action.payload !== i )
                forms: state.forms.filter(form => form !== action.payload)
            }
        default:
            return state
    }
}

