import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, {Fragment, useState} from "react"
import classes from './iphoneInput.module.css'
import Input from "../../UI/Input";

export default function PhoneInputC() {
    const [value, setValue] = useState()
    return (
        <div
            className={classes.Input}
        >
            <label
            >{'Телефон'}</label>
            <PhoneInput
                inputstyle="input"
                className={classes.inp}
                value={value}
                onChange={setValue}/>
        </div>

    )
}
