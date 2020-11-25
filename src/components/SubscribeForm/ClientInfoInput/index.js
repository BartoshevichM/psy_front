import React, {Component, Fragment} from "react"
import classes from './clientInfoInput.module.css'
import ButtonClientInfo from "./elements/ButtonClientInfo";
import { SUBSCRIBE } from "../../../constants/menu"
import Inputs from './elements/Inputs/index'
import InputPhone from "./elements/Inputs/elements/InputPhone";

class ClientInfoInput extends Component {

    render() {
        return (
            <div className={classes.Form}>
                <div className={classes.titleContainer}>
                    <div className={classes.Title}>{ SUBSCRIBE }</div>
                </div>
                <div className={classes.container}>
                    <Inputs/>
                </div>
                <div className={classes.btn}>
                    <ButtonClientInfo/>
                </div>
            </div>
        )
    }

}

export default ClientInfoInput
