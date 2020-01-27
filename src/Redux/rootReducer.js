import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    UserReducer: UserReducer,
})

export default rootReducer