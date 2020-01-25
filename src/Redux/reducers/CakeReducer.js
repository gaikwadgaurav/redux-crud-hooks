import { BUY_CAKE } from '../types/EventTypes';

const intitialState = {
    numOfCakes: 10
}

const cakeReducer = (state = intitialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

export default cakeReducer 