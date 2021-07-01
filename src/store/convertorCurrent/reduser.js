import * as AT from './actionTypes';

const initialState = {
    input_type: 'uah',
    input_value: '',
    output_type: 'usd',
    output_value: '',
    some_value:''
}

export const reducerCurrent = (state = initialState, action) =>{
    switch (action.type){
        case AT.CHANGE_INPUT_TYPE:
            return {
                ...state,
                input_type: action.payload,
            }
        case AT.CHANGE_OUTPUT_TYPE:
            return {
                ...state,
                output_type: action.payload,
            }
        case AT.CHANGE_INPUT_VALUE:
            return {
                ...state,
                input_value: action.payload,
            }
        case AT.CHANGE_OUTPUT_VALUE:
            return {
                ...state,
                output_value: action.payload,
            }
        case AT.FETCH_GET_SUCCSESS:
            return {
                ...state,
                some_value: action.payload,
            }
        default:
            return state
    }
}
