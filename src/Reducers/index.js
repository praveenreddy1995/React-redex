import {combineReducers} from 'redux';
import loginReducers from './loginReducers.js';
import searchReducers from './searchReducers'
const mainReducer= combineReducers({
    loginReducers,
    searchReducers
});
export default mainReducer;
