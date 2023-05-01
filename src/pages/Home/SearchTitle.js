import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {setFilter} from "../../store/slices/searchByTitleSlice";

const SearchTitle = () => {
    // basically fetch the state from the slice that is stored, in our case - search string.
    const filter = useSelector(
        (state) => state.searchByTitle.filter
    )
    // call action, using dispatch (more or less same as setValue from useState)
    const dispatch = useDispatch();


    return <div className="nav-container">
        <input onChange={e =>
        dispatch(setFilter(e.target.value))} value={filter} type="text" name="search" data-testid="search" className="flex-grow-big"
               placeholder="Article Title"/>
        <div className="text-container select-text flex-grow-small">SEARCH</div>
    </div>
}

export default SearchTitle;