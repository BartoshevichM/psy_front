import React, {Component} from "react"
import classes from './subribeForm.module.css'
import {connect} from 'react-redux'
import ClientInfoInput from "./ClientInfoInput";
import DateTimeInput from "./DateTimeInput";
import SubscribeResult from "./SubscribeResult";

class SubscribeForm extends Component {

    render() {
        let currentComponent = <DateTimeInput/>

        // {
        //     switch (this.props.activeStep) {
        //         case 0:
        //           currentComponent = <ClientInfoInput/>
        //             break
        //         case 1:
        //             currentComponent = <DateTimeInput/>
        //             break
        //         case 2:
        //             currentComponent = <SubscribeResult/>
        //             break
        //     }
        // }

        return (
            <div className={classes.SubscribeForm}>
                { currentComponent }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        activeStep: state.subscribeProgress.activeStep,
    }
}

export default connect(mapStateToProps)(SubscribeForm)
