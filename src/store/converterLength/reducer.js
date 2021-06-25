import * as AT from './actionTypes';

const initialState = {
    input_type: 'meter',
    input_value: '',
    output_type: 'foot',
    output_value: '',
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case AT.CHANGE_INPUT_TYPE:
            return {
                ...state,
                input_type: action.payload,
            }
        case AT.CHANGE_INPUT_VALUE:
            return {
                ...state,
                input_value: action.payload,
            }
        default:
            return state
    }
}