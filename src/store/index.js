import { combineReducers } from 'redux';
import { reducer } from './converterLength/reducer';

const AllReducers = combineReducers({
    length: reducer
})

export default AllReducers;