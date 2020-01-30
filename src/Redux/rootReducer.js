import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    UserReducer: UserReducer,
    form: formReducer
})
export default rootReducer