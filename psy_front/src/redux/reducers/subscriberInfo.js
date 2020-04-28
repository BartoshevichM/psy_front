import {SET_EMAIL, SET_NAME, SET_PHONE, SET_TOUCHED} from "../actions/actionTypes";

const initialState = {
    subInfo: {

        name: {
            value: '',
            type: 'text',
            label: 'Имя',
            errorMessage: 'Имя слишком короткое',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 1
            }
        },

        phone: {
            value: '',
            type: 'text',
            label: 'Телефон',
            errorMessage: 'Введите корректный номер телефона',
            valid: false,
            touched: false,
            validation: {
                required: true,
                phone: true
            }
        },

        email: {
            value: '',
            type: 'email',
            label: 'Емаил',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        }
    }

}

export default function subscriberInfo(state = initialState, action) {
    let subInfo = state.subInfo

    switch (action.type) {
        case SET_NAME:
            subInfo.name = {...action.payload}
            return {subInfo: {...subInfo}}

        case SET_PHONE:
            subInfo.phone = action.payload
            return {subInfo: {...subInfo}}

        case SET_EMAIL:
            subInfo.email = action.payload
            return {subInfo: {...subInfo}}

        case SET_TOUCHED:
            subInfo[action.payload].touched = true
            return {subInfo: {...subInfo}}

        default:
            return state
    }
}
