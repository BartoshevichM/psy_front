import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, {useState, Component, Fragment} from "react"
import classes from './inputPhone.module.css'
import { inputPhoneActive, inputPhonePassive, setPhone  } from '../../../../../../../redux/actions/actions'

function InputPhone() {
    const [value, setValue] = useState()
    console.log(value)
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

// class InputPhone extends Component {
//     setState(state, callback) {
//         super.setState(state, callback);
//         this.value = ''
//         this.setValue = () => console.log(this.value)
//     }
//
//     render() {
//         return (
// <Fragment>
//     {InputPhoneF}
// </Fragment>
//         )
//     }
// }




export default InputPhone
