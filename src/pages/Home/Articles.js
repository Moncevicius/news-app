import React, {useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import SpinnerLoader from "../../components/shared/SpinnerLoader";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useGetNewsQuery} from "../../store/slices/apiSlice";
import {setArticles} from "../../store/slices/newsArticlesSlice";

const Articles = () => {
    const {data = [{articles: []}], isLoading} = useGetNewsQuery();

    const dispatch = useDispatch();
    useEffect(() => {
        if (!isLoading) {
            dispatch(setArticles(data.articles))
        }
    }, [!isLoading]);

    // import state from store to use search by title
    const search = useSelector(
        (state) => state.searchByTitle.filter
    )

    const selected = useSelector(
        (state) => state.selectNewsSource.option
    )

    //holds the filtered array by source / title for display
    const displayArray = !isLoading ? data.articles
        .filter(item => selected !== "ALL" ? item.source.name === selected : item)
        .filter(item => search !== "" ? item.title.toLowerCase().includes(search.toLowerCase()) : item)
        : [];

    return (
        <>
            <main>
                {isLoading ? <SpinnerLoader/> :
                    <div className="grid-container">
                        {displayArray.length === 0 && isLoading === false ? <h2>No such Article</h2>
                            : displayArray.map((item, index) =>
                                <article key={uuidv4()} className="grid-item">
                                    <div className="flex-container">
                                        <img className="image" src={item.urlToImage} alt="Image of the Article"/>
                                        <p>{item.publishedAt}, {item.source.name}</p>
                                        <h2 className="articles-title">{item.title}</h2>
                                        <p className="articles-description">{item.description}</p>
                                        <Link to={`/article/${index}`}><p className="read-more">Read More</p></Link>
                                    </div>
                                </article>
                            )}
                    </div>
                }
            </main>
        </>
    )
}

export default Articles