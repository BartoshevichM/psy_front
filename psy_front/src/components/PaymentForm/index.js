import React, {Component} from "react"
import {connect} from 'react-redux'
import classes from './payment.module.css'
import Button from "../UI/Button";
import Input from "../UI/Input";
import {
    inputEmailActive, inputEmailPassive,
    inputNameActive,
    inputNamePassive,
    inputPhoneActive,
    inputPhonePassive
} from "../../redux/actions/actions";

class PaymentForm extends Component {

    paymentHandler = () => {
        console.log('Next')
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onBlurHandler = event => {
        if (this.props.inputName) {
            if (!event.target.value.length) {
                this.props.inputNamePassive()
            }
        }

        if (this.props.inputPhone) {
            if (!event.target.value.length) {
                this.props.inputPhonePassive()
            }
        }

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
                <div className={classes.Title}>Запись на консультацию</div>
                <form
                    onSubmit={this.submitHandler}
                    className={classes.Form}
                >
                    <Input
                        label="Имя"
                        inputStyle="payment"
                        isActive={this.props.inputName}
                        onClick={this.props.inputNameActive}
                        onBlur={this.onBlurHandler}
                    />
                    <Input
                        label="Телефон"
                        inputStyle="payment"
                        isActive={this.props.inputPhone}
                        onClick={this.props.inputPhoneActive}
                        onBlur={this.onBlurHandler}
                    />
                    <Input
                        label="Емаил"
                        inputStyle="payment"
                        isActive={this.props.inputEmail}
                        onClick={this.props.inputEmailActive}
                        onBlur={this.onBlurHandler}
                    />
                    <Button
                        type="payment"
                        onClick={this.paymentHandler}
                    >
                        Продолжить
                    </Button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputName: state.input.inputName,
        inputPhone: state.input.inputPhone,
        inputEmail: state.input.inputEmail
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
