import {
    SET_CONSULTATION_DATE,
    SET_CONSULTATION_TIME,
    SET_EMAIL,
    SET_NAME,
    SET_PHONE,
    SET_TOUCHED
} from "../actions/actionTypes";

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
        },
    },
    consultationInfo: {
        consultationDate: null,
        consultationTime: null
    }
}

export default function subscriberInfo(state = initialState, action) {
    let subInfo = state.subInfo
    let consultationInfo = state.consultationInfo

    console.log(state)

    switch (action.type) {
        case SET_NAME:
            subInfo.name = {...action.payload}
            return {subInfo, consultationInfo}

        case SET_PHONE:
            subInfo.phone = action.payload
            return {subInfo, consultationInfo}

        case SET_EMAIL:
            subInfo.email = action.payload
            return {subInfo, consultationInfo}

        case SET_TOUCHED:
            subInfo[action.payload].touched = true
            return {subInfo, consultationInfo}

        case SET_CONSULTATION_DATE:
            if (consultationInfo.consultationDate !== action.payload) {
                consultationInfo.consultationTime = null
            }
            consultationInfo.consultationDate = action.payload
            return {subInfo, consultationInfo}

        case SET_CONSULTATION_TIME:
            consultationInfo.consultationTime = action.payload
            return {subInfo, consultationInfo}

        default:
            return state
    }
}
