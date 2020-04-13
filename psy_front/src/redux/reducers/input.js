const initialState = {
    inputName: false,
    inputPhone: false,
    inputEmail: false
}

export default function input(state = initialState, action) {
    switch (action.type) {

        case 'INPUT_NAME_ACTIVE':
            return {
                inputName: true,
                inputPhone: state.inputPhone,
                inputEmail: state.inputEmail
            }

        case 'INPUT_PHONE_ACTIVE':
            return {
                inputName: state.inputName,
                inputPhone: true,
                inputEmail: state.inputEmail
            }

        case 'INPUT_EMAIL_ACTIVE':
            return {
                inputName: state.inputName,
                inputPhone: state.inputPhone,
                inputEmail: true
            }

        case 'INPUT_NAME_PASSIVE':
            return {
                inputName: false,
                inputPhone: state.inputPhone,
                inputEmail: state.inputEmail
            }

        case 'INPUT_PHONE_PASSIVE':
            return {
                inputName: state.inputName,
                inputPhone: false,
                inputEmail: state.inputEmail
            }

        case 'INPUT_EMAIL_PASSIVE':
            return {
                inputName: state.inputName,
                inputPhone: state.inputPhone,
                inputEmail: false
            }

        default:
            return state
    }
}
