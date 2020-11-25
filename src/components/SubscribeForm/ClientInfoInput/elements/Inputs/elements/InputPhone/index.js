import React, {Component} from "react"
import classes from './inputPhone.module.css'
import Input from './Input'
import {
    inputPhoneActive,
    inputPhonePassive,
    setPhone
} from '../../../../../../../redux/actions/actions'
import {connect} from "react-redux";

class InputPhone extends Component {

    onChangeHandler = (value) => {
        console.log(this.props)
        const control = this.props.subInfo['phone']
        control.value = value
        control.touched = true
        this.props.setPhone(control)
    }

    onBlurHandlerPhone = event => {
        if (this.props.inputPhone) {
            if (!event.target.value.length) {
                this.props.inputPhonePassive()
            }
        }
    }

    render() {
        return (
            <div className={classes.Input}>
                <Input
                    value={this.props.subInfo.phone.value}
                    onChange={event => this.onChangeHandler(event)}
                    isActive={this.props.inputPhone}
                    onClick={this.props.inputPhoneActive}
                    onBlur={this.onBlurHandlerPhone}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputPhone: state.input.inputPhone,
        subInfo: state.subscriberInfo.subInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputPhoneActive: () => dispatch(inputPhoneActive()),
        inputPhonePassive: () => dispatch(inputPhonePassive()),
        setPhone: (subInfo) => dispatch(setPhone(subInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPhone)

