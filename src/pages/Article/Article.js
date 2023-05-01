import React from "react";
import {useParams} from "react-router-dom";
import {useGetNewsQuery} from "../../store/slices/apiSlice";
import SpinnerLoader from "../../components/shared/SpinnerLoader";
import PageNotFound from "../Page404";
import NavHomeButton from "../../components/shared/NavHomeButton";

const Article = () => {
    const {id} = useParams()
    const {data , isLoading} = useGetNewsQuery();

    if(isNaN(Number(id)) || Number(id) < 0){
        return <PageNotFound />
    }

    return <>
        {isLoading ? <SpinnerLoader/> : data.articles.length < id ? <PageNotFound /> :
            <>
            <NavHomeButton />
            <div className="article">
                <img className="image" src={data.articles[id].urlToImage} alt="Image of the Article"/>
                <h3 className="">{data.articles[id].publishedAt}, {data?.articles[id]?.source.name}</h3>
                <p className="articles-title text-size-1">{data.articles[id].title}</p>
                <p className="articles-description text-size-2">{data.articles[id].content}</p>
            </div>
            </>
        }

    </>
}

export default Article;