import * as AT from './actionTypes';

export const changeInputType = (payload) =>({
    type: AT.CHANGE_INPUT_TYPE,
    payload,
})

export const changeInputValue = (payload) =>({
    type: AT.CHANGE_INPUT_VALUE,
    payload,
})

export const changeOutputType = (payload) =>({
    type: AT.CHANGE_OUTPUT_TYPE,
    payload,
})

export const changeOutputValue = (payload) =>({
    type: AT.CHANGE_OUTPUT_VALUE,
    payload,
})