import React from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import classes from "../inputPhone.module.css";

const Input = props => {

    return (
        <div>
            <label
                className={props.isActive ? classes.activeLabel : ''}
                htmlFor="inpPhone"
            >
                {'Телефон'}
            </label>
            <PhoneInput
                inputstyle="input"
                className={classes.inp}
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
                onBlur={props.onBlur}
                id="inpPhone"
            />
        </div>
    )
}

export default Input
