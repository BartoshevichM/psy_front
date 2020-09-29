import React, {Component} from "react";
import Input from "../../../../../../UI/Input";
import {connect} from 'react-redux'
import {
    inputNameActive,
    inputNamePassive,
    setName
} from "../../../../../../../redux/actions/actions";

class InputName extends Component {

    onBlurHandlerName = event => {
        if (this.props.inputName) {
            if (!event.target.value.length) {
                this.props.inputNamePassive()
            }
        }
    }

    validateControl(value, validation) {
        return value.length > validation.minLength
    }

    onChangeHandler = (value) => {
        const control = this.props.subInfo['name']
        control.value = value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        this.props.setName(control)
    }

    render() {
        return (
            <Input
                key='Name0'
                label={this.props.subInfo.name.label}
                value={this.props.subInfo.name.value}
                valid={this.props.subInfo.name.valid}
                touched={this.props.subInfo.name.touched}
                errorMessage={this.props.subInfo.name.errorMessage}
                shouldValidate={this.props.subInfo.name.validation.required}
                isActive={this.props.inputName}
                onClick={this.props.inputNameActive}
                onBlur={this.onBlurHandlerName}
                onChange={event => this.onChangeHandler(event.target.value)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        inputName: state.input.inputName,
        subInfo: state.subscriberInfo.subInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputNameActive: () => dispatch(inputNameActive()),
        inputNamePassive: () => dispatch(inputNamePassive()),
        setName: (subInfo) => dispatch(setName(subInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputName)
