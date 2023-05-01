import React from "react";
import SelectSources from "./SelectSources";
import SearchTitle from "./SearchTitle";
import Articles from "./Articles";
import ErrorBoundary from "../../components/shared/ErrorBoundary";

const Home = () => {
    return (
        <>
            <nav>
                <ErrorBoundary>
                    <SelectSources/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <SearchTitle/>
                </ErrorBoundary>
            </nav>
            <ErrorBoundary>
                <Articles/>
            </ErrorBoundary>
        </>
    )
}

export default Home;