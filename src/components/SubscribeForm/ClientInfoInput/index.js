import React, {Component} from "react"
import classes from './clientInfoInput.module.css'
import ButtonClientInfo from "./elements/ButtonClientInfo";
import { SUBSCRIBE } from "../../../constants/menu"
import Inputs from './elements/Inputs/index'

class ClientInfoInput extends Component {

    render() {
        return (
            <div>
                <div className={classes.titleContainer}>
                    <div className={classes.Title}>{ SUBSCRIBE }</div>
                </div>
                <div className={classes.container}>
                    <Inputs/>
                </div>
                <div>
                    <ButtonClientInfo/>
                </div>
            </div>
        )
    }

}

export default ClientInfoInput
