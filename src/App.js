import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles.css"

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import ArticleIndex from "./pages/Article";
import PageNotFound from "./pages/Page404";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/article/:id" element={<ArticleIndex />} />
                    <Route path={"*"}  element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
