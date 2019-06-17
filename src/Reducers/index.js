import {combineReducers} from 'redux';
import loginReducers from './loginReducers.js';
import registerReducers from './registerReducers'
const mainReducer= combineReducers({
    loginReducers,
    registerReducers
});
export default mainReducer;
