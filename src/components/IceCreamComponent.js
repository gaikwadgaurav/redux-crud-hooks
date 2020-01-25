import React from 'react';
import { buyIceCream } from '../Redux';
import { useSelector, useDispatch } from 'react-redux';
function IceCreamComponent(props) {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of ice-creams: {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamComponent