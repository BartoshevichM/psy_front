import React, {Fragment} from "react";
import classes from './payment.module.css'
import PaymentForm from "../../../components/PaymentForm";

export default function () {
    return (
        <Fragment>
            <div className={classes.Payment}>
                <PaymentForm/>
            </div>
            >
        </Fragment>
    )
}
