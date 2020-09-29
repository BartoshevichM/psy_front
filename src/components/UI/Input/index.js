import React from "react";
import classes from './input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const inputStyle = props.inputStyle || 'input'
    const cls = [classes.Input, inputStyle]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

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
            {
                isInvalid(props) ?
                    <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }
        </div>
    )
}

export default Input
