import React, {Component, Fragment} from "react"
import {connect} from 'react-redux'
import classes from './payment.module.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import {
    inputEmailActive, inputEmailPassive,
    inputNameActive, inputNamePassive, inputPhoneActive, inputPhonePassive,
    setStep0, setStep1, setStep2
} from "../../redux/actions/actions";
import DataPicker from "./DataPicker";
import Time from "./Time";

class PaymentForm extends Component {
    titlesArr = ['Запись на консультацию', 'Выберите дату и время']

    paymentButtonHandler = () => {
        if (!this.props.activeStep) this.props.setStep1()
        if (this.props.activeStep === 1) this.props.setStep2()
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
                            <Input
                                label="Имя"
                                inputStyle="input"
                                isActive={this.props.inputName}
                                onClick={this.props.inputNameActive}
                                onBlur={this.onBlurHandlerName}
                            />
                            <Input
                                label="Телефон"
                                inputStyle="input"
                                isActive={this.props.inputPhone}
                                onClick={this.props.inputPhoneActive}
                                onBlur={this.onBlurHandlerPhone}
                            />
                            <Input
                                label="Емаил"
                                inputStyle="input"
                                isActive={this.props.inputEmail}
                                onClick={this.props.inputEmailActive}
                                onBlur={this.onBlurHandlerEmail}
                            />
                        </form> : ''}

                    {this.props.activeStep === 1 ?
                        <Fragment>
                            <DataPicker/>
                            {this.props.selectedDate ?
                                <Time/>
                                : ''
                            }
                        </Fragment>
                        : ''}
                </div>
                <div>
                    <Button
                        type="payment"
                        onClick={this.paymentButtonHandler}
                    >
                        Продолжить </Button>
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
        activeStep: state.payment.activeStep,
        selectedDate: state.payment.selectedDate,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
