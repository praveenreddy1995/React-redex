import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../Reducers';
import thunk from 'redux-thunk';
export default function configureStore(){
    return createStore(
        mainReducer,
        applyMiddleware(thunk)
    )
}
