import React, {Fragment} from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Payment from "./Payment";
import Menu from "../../components/Menu"

export default function ({props}) {
    return (
        <Fragment>
            <Menu/>
            <Home/>
            <About/>
            <Services/>
            <Payment/>
        </Fragment>
    )
}
