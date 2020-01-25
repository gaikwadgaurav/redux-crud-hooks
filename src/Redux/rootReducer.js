import { combineReducers } from 'redux';
import cakeReducer from './reducers/CakeReducer';
import iceCreamReducer from './reducers/IceCreamReducer';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    UserReducer: UserReducer
})

export default rootReducer