import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content_item from './components/Main/Content_item';
import Content_list from "./components/Main/Content_list";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Content_list />
            <Content_item />
            <Content_item />
            <Content_item />
            <Footer />
        </Fragment>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));