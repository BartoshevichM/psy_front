import React, {Component, Fragment} from "react"
import {connect} from 'react-redux'
import classes from './payment.module.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import {
    inputEmailActive,
    inputEmailPassive,
    inputNameActive,
    inputNamePassive,
    inputPhoneActive,
    inputPhonePassive,
    setEmail,
    setName,
    setPhone,
    setStep0,
    setStep1,
    setStep2,
    setTouched
} from "../../redux/actions/actions";
import DataPicker from "./DataPicker";
import NotifySuccess from './NotifySuccess'
import Time from "./Time";
import PhoneInputC from "./PhoneInput";

function validateEmail(email) {
    let res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

class PaymentForm extends Component {
    titlesArr = ['Запись на консультацию', 'Выберите дату и время']

    paymentButtonHandler = () => {
        if (!this.props.activeStep) {
            if (
                this.props.subInfo.name.valid &&
                this.props.subInfo.phone.valid &&
                this.props.subInfo.email.valid
            ) {
                this.props.setStep1()
            } else {
                if (!this.props.subInfo.name.valid) this.props.setTouched('name')
                if (!this.props.subInfo.phone.valid) this.props.setTouched('phone')
                if (!this.props.subInfo.email.valid) this.props.setTouched('email')
            }
        }
        if (this.props.activeStep === 1) this.props.setStep2()
        if (this.props.activeStep === 2) this.props.setStep0()
    }

    backButtonHandler = () => {
        if (this.props.activeStep === 1) this.props.setStep0()
        if (this.props.activeStep === 2) this.props.setStep1()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onBlurHandlerName = event => {
        if (this.props.inputName) {
            if (!event.target.value.length) {
                this.props.inputNamePassive()
            }
        }
    }

    onBlurHandlerPhone = event => {
        if (this.props.inputPhone) {
            if (!event.target.value.length) {
                this.props.inputPhonePassive()
            }
        }
    }

    onBlurHandlerEmail = event => {
        if (this.props.inputEmail) {
            if (!event.target.value.length) {
                this.props.inputEmailPassive()
            }
        }
    }

    getInputInfo = controlName => {
        switch (controlName) {
            case 'name':
                return {
                    isActive: this.props.inputName,
                    onClick: this.props.inputNameActive,
                    onBlur: this.onBlurHandlerName
                }
            case 'phone':
                return {
                    isActive: this.props.inputPhone,
                    onClick: this.props.inputPhoneActive,
                    onBlur: this.onBlurHandlerPhone
                }
            case 'email':
                return {
                    isActive: this.props.inputEmail,
                    onClick: this.props.inputEmailActive,
                    onBlur: this.onBlurHandlerEmail
                }
            default:
                break;
        }
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value !== '' && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length > validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (value, controlName) => {
        const control = this.props.subInfo[controlName]
        control.value = value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        switch (controlName) {
            case 'name':
                this.props.setName(control)
                return
            case 'phone':
                this.props.setPhone(control)
                return
            case 'email':
                this.props.setEmail(control)
                return
            default:
                break;

        }
    }

    renderInputs() {
        return Object.keys(this.props.subInfo).map((controlName, index) => {
            const control = this.props.subInfo[controlName]
            const inputInfo = this.getInputInfo(controlName)
            return (
                <Input
                    key={controlName + index}
                    label={control.label}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    inputStyle="input"
                    isActive={inputInfo.isActive}
                    onClick={inputInfo.onClick}
                    onBlur={inputInfo.onBlur}
                    onChange={event => this.onChangeHandler(event.target.value, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.PaymentForm}>
                <div className={classes.titleContainer}>
                    {
                        this.props.activeStep ?
                            <div
                                className={classes.backButton}
                                onClick={this.backButtonHandler}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
                                </svg>
                            </div>
                            : ''
                    }
                    <div className={classes.Title}>{this.titlesArr[this.props.activeStep]}</div>
                </div>
                <div className={classes.container}>

                    {!this.props.activeStep ?
                        <form
                            onSubmit={this.submitHandler}
                            className={classes.Form}
                        >
                            {this.renderInputs()}
                            <PhoneInputC />

                        </form> : null}

                    {this.props.activeStep === 1 ?
                        <Fragment>
                            <DataPicker/>
                            {this.props.selectedDate ?
                                <Time/>
                                : null
                            }
                        </Fragment>
                        : null}
                    {this.props.activeStep === 2 ?
                        <Fragment>
                            <NotifySuccess/>
                        </Fragment>
                        : null}
                </div>
                <div>
                    <Button
                        type="payment"
                        onClick={this.paymentButtonHandler}
                    > {this.props.activeStep === 2 ? 'Завершить': 'Продолжить'}
                         </Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputName: state.input.inputName,
        inputPhone: state.input.inputPhone,
        inputEmail: state.input.inputEmail,
        activeStep: state.subscribeProgress.activeStep,
        selectedDate: state.subscribeProgress.selectedDate,
        subInfo: state.subscriberInfo.subInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputNameActive: () => dispatch(inputNameActive()),
        inputPhoneActive: () => dispatch(inputPhoneActive()),
        inputEmailActive: () => dispatch(inputEmailActive()),
        inputNamePassive: () => dispatch(inputNamePassive()),
        inputPhonePassive: () => dispatch(inputPhonePassive()),
        inputEmailPassive: () => dispatch(inputEmailPassive()),
        setStep0: () => dispatch(setStep0()),
        setStep1: () => dispatch(setStep1()),
        setStep2: () => dispatch(setStep2()),
        setName: (subInfo) => dispatch(setName(subInfo)),
        setPhone: (control) => dispatch(setPhone(control)),
        setEmail: (control) => dispatch(setEmail(control)),
        setTouched: (inputName) => dispatch(setTouched(inputName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
