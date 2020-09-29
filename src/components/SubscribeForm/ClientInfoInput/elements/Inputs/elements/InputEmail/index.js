import React, {Component} from "react";
import Input from "../../../../../../UI/Input";
import {connect} from 'react-redux'
import {inputEmailActive, inputEmailPassive, setEmail} from "../../../../../../../redux/actions/actions";

function validateEmail(email) {
    let res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

class InputEmail extends Component {
    onBlurHandlerEmail = event => {
        if (this.props.inputEmail) {
            if (!event.target.value.length) {
                this.props.inputEmailPassive()
            }
        }
    }

    validateControl = (value) => validateEmail(value)

    onChangeHandler = (value) => {
        const control = this.props.subInfo['email']
        control.value = value
        control.touched = true
        control.valid = this.validateControl(control.value)
        this.props.setEmail(control)
    }

    render() {
        return (
            <Input
                key='Email0'
                label={this.props.subInfo.email.label}
                value={this.props.subInfo.email.value}
                valid={this.props.subInfo.email.valid}
                touched={this.props.subInfo.email.touched}
                errorMessage={this.props.subInfo.email.errorMessage}
                shouldValidate={this.props.subInfo.email.validation.required}
                isActive={this.props.inputEmail}
                onClick={this.props.inputEmailActive}
                onBlur={this.onBlurHandlerEmail}
                onChange={event => this.onChangeHandler(event.target.value)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        inputEmail: state.input.inputEmail,
        subInfo: state.subscriberInfo.subInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputEmailActive: () => dispatch(inputEmailActive()),
        inputEmailPassive: () => dispatch(inputEmailPassive()),
        setEmail: (subInfo) => dispatch(setEmail(subInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail)
