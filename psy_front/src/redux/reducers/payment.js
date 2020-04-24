import {
    SET_SELECTED_DATE,
    CLEAR_SELECTED_DATE, SET_STEP_0, SET_STEP_1, SET_STEP_2
} from '../actions/actionTypes'

const initialState = {
    selectedDate: null,
    activeStep: 0
}

export default function payment(state = initialState, action) {
    switch (action.type) {

        case SET_SELECTED_DATE:
            return {
                selectedDate: action.payload,
                activeStep: state.activeStep
            }

        case CLEAR_SELECTED_DATE:
            return {
                selectedDate: null,
                activeStep: state.activeStep
            }

        case SET_STEP_0:
            return {
                selectedDate: state.selectedDate,
                activeStep: 0
            }

        case SET_STEP_1:
            return {
                selectedDate: state.selectedDate,
                activeStep: 1
            }

        case SET_STEP_2:
            return {
                selectedDate: state.selectedDate,
                activeStep: 2
            }

        default:
            return state
    }
}
