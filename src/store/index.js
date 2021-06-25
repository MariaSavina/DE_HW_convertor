import { combineReducers } from 'redux';
import Length from './length';

const AllReducers = combineReducers({
    length: Length
})

export default AllReducers;