import {FormActionTypes} from './form.types'

export const addForm = form => ({
    type: FormActionTypes.ADD_FORM,
    payload: form
})

export const removeForm = list => ({
    type: FormActionTypes.REMOVE_FORM,
    payload: list
})