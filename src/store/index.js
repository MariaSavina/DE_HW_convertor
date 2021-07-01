import { combineReducers } from 'redux';
import { reducer } from './converterLength/reducer';
import { reducerCurrent } from './convertorCurrent/reduser'

const AllReducers = combineReducers({
    length: reducer,
    current: reducerCurrent
})

export default AllReducers;