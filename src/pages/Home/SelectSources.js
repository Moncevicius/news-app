import React from "react";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {selectSource} from "../../store/slices/selectNewsSourceSlice";


const SelectSources = () => {
    // retrieve stored news articles
    const articles = useSelector(
        (state) => state.newsArticles.articles
    )

    //generate options for news source
    let options = [];
    articles.forEach(item => options.push(item.source.name));
    options = [...new Set(options)]

    const selected = useSelector(
        (state) => state.selectNewsSource.option
    )
    // call action, using dispatch (more or less same as setValue from useState)
    const dispatch = useDispatch();

    return <div className="nav-container">
        <div className="text-container select-text flex-grow-small">NEWS SOURCE</div>
        <select value={selected} onChange={e =>
            dispatch(selectSource(e.target.value))} name="sources" id="sources" className="flex-grow-big">
            <option value="ALL">ALL</option>
            {options.map(item => (
                <option key={uuidv4()} value={item}>{item}</option>
            ))}
        </select>
    </div>
}

export default SelectSources;