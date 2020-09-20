import React, {Fragment} from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Payment from "./Payment";

export default function ({ props }) {
    return (
        <Fragment>
            <Home/>
            <About/>
            <Services/>
            <Payment/>
        </Fragment>
    )
}
