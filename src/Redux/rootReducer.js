import { combineReducers } from 'redux';
import cakeReducer from './reducers/CakeReducer';
import iceCreamReducer from './reducers/IceCreamReducer';
import AsyncReducer from './reducers/AsyncReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    asyncUser: AsyncReducer
})

export default rootReducer