import React from 'react';
import { filterUserList } from '../../Redux/action/UserAction';
import { useDispatch } from 'react-redux';
export default function SearchFilter({ ...props }) {
    const dispatch = useDispatch();

    function filterSearch(value) {
        dispatch(filterUserList(value))
    }

    return (
        <div className='filterUser'>
            <input id='search-field' label='Search' placeholder='search' onChange={e => filterSearch(e.target.value)} />
        </div>)


}