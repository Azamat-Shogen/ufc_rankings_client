import React from "react";
import {Spinner} from "reactstrap";
import pageContainer from "../../../pageContainer";

const Home = () => {

    return (
        <React.Fragment>
            <h1>Homepage</h1>
            <h1>Work in progress... 🥱</h1>
            <Spinner />
        </React.Fragment>
    )
}

export default pageContainer(Home)

