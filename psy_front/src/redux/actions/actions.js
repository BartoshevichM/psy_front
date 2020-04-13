import {
    OPEN_CLOSE,
    SET_ACTIVE_CLS_MENU,
    SET_CLS_MENU,
    INPUT_PHONE_ACTIVE,
    INPUT_EMAIL_ACTIVE,
    INPUT_EMAIL_PASSIVE,
    INPUT_NAME_ACTIVE,
    INPUT_NAME_PASSIVE,
    INPUT_PHONE_PASSIVE
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
