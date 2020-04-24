import React, {Component, Fragment} from "react"
import {connect} from 'react-redux'
import classes from './payment.module.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import Calendar from "./DataPicker";
import {
    inputEmailActive, inputEmailPassive,
    inputNameActive,
    inputNamePassive,
    inputPhoneActive,
    inputPhonePassive
} from "../../redux/actions/actions";
import DataPicker from "./DataPicker";
import Time from "./Time";

class PaymentForm extends Component {

    paymentHandler = () => {
        console.log('Next')
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
        console.log(this.props.inputName)
        return (
            <div className={classes.PaymentForm}>
                <div className={classes.container}>
                    <div className={classes.Title}>Запись на консультацию</div>

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
                            <Time/>
                        </Fragment>
                        : ''}

                    <Button
                        type="payment"
                        onClick={this.paymentHandler}
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
        activeStep: state.payment.activeStep
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
