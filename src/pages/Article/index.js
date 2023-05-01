import React from "react";
import Article from "./Article";
import ErrorBoundary from "../../components/shared/ErrorBoundary";
//import NavHomeButton from "../../components/shared/NavHomeButton";

const ArticleIndex = () => {
    return <>
        <ErrorBoundary>
            <Article/>
        </ErrorBoundary>
    </>
}

export default ArticleIndex