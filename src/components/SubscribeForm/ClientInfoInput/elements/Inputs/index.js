import React, { Component, Fragment } from "react";
import InputName from './elements/InpunName'
import InputEmail from './elements/InputEmail'
import InputPhone from './elements/InputPhone'

class Inputs extends Component {
    render() {
        return(
            <Fragment>
                <InputName/>
                <InputEmail/>
                <InputPhone/>
            </Fragment>
        )
    }
}

export default Inputs
