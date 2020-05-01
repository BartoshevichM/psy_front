import {
    OPEN_CLOSE,
    SET_ACTIVE_CLS_MENU,
    SET_CLS_MENU,
    INPUT_PHONE_ACTIVE,
    INPUT_EMAIL_ACTIVE,
    INPUT_EMAIL_PASSIVE,
    INPUT_NAME_ACTIVE,
    INPUT_NAME_PASSIVE,
    INPUT_PHONE_PASSIVE,
    SET_SELECTED_DATE,
    CLEAR_SELECTED_DATE,
    SET_STEP_0,
    SET_STEP_1,
    SET_STEP_2,
    SET_NAME,
    SET_PHONE,
    SET_EMAIL,
    SET_TOUCHED, SET_SELECTED_DATE_ELEMENT
} from './actionTypes'

export const openClose = () => ({type: OPEN_CLOSE})
export const inputPhoneActive = () => ({type: INPUT_PHONE_ACTIVE})
export const inputEmailActive = () => ({type: INPUT_EMAIL_ACTIVE})
export const inputNameActive = () => ({type: INPUT_NAME_ACTIVE})
export const inputNamePassive = () => ({type: INPUT_NAME_PASSIVE})
export const inputEmailPassive = () => ({type: INPUT_EMAIL_PASSIVE})
export const inputPhonePassive = () => ({type: INPUT_PHONE_PASSIVE})

export const setClsMenu = (classes) => ({
    type: SET_CLS_MENU,
    payload: classes
})

export const setActiveClsMenu = (classes) => ({
    type: SET_ACTIVE_CLS_MENU,
    payload: classes
})

export const setSelectedDate = (date) => ({
    type: SET_SELECTED_DATE,
    payload: date
})

export const setStep0 = () => ({type: SET_STEP_0})
export const setStep1 = () => ({type: SET_STEP_1})
export const setStep2 = () => ({type: SET_STEP_2})

export const setName = (data) => ({
    type: SET_NAME,
    payload: data
})
export const setPhone = (data) => ({
    type: SET_PHONE,
    payload: data
})
export const setEmail = (data) => ({
    type: SET_EMAIL,
    payload: data
})

export const setTouched = (data) => ({
    type: SET_TOUCHED,
    payload: data
})
