import React from "react";
import classes from './input.module.css'

const Input = props => {
    const inputType = props.type || 'text'
    const inputStyle = props.inputStyle || ''
    const cls = [classes.Input, inputStyle]
    const htmlFor = `${inputType}-${Math.random()}`

    return (
        <div className={cls.join(' ')}>
            <label
                className={props.isActive ? classes.activeLabel : ''}
                htmlFor={htmlFor}
            >
                {props.label}
            </label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
                onBlur={props.onBlur}
            />
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default Input
