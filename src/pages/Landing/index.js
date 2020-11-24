import React, {Fragment} from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Subscribe from "./Subscribe";
import Payment from "./Payment";
import Footer from "../../hoc/footer/Footer";

export default function ({ props }) {
    return (
        <Fragment>
            <Home />
            <About />
            <Services />
            <Subscribe />
            <Footer/>
            {/*<Payment />*/}
        </Fragment>
    )
}
