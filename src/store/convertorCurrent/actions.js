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
export const changeSomeValue = (payload) => ({type:AT.FETCH_GET_SUCCSESS, payload})

export const getCurrent = () => dispatch => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{dispatch(changeSomeValue(data)) } 
     );              
}