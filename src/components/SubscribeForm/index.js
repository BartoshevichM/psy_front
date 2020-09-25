import React, {Component} from "react"
import classes from './subribeForm.module.css'
import ClientInfoInput from "./ClientInfoInput";
import DateTimeInput from "./DateTimeInput";
import SubscribeResult from "./SubscribeResult";

class SubscribeForm extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={classes.SubscribeForm}>
              <ClientInfoInput/>
              <DateTimeInput/>
              <SubscribeResult/>
            </div>
        )
    }

}

export default SubscribeForm
