import {
    SET_SELECTED_DATE,
    SET_STEP_0,
    SET_STEP_1,
    SET_STEP_2
} from '../actions/actionTypes'

const initialState = {
    selectedDate: null,
    selectedDateElement: null,
    activeStep: 0
}

export default function subscribeProgress(state = initialState, action) {
    switch (action.type) {

        case SET_SELECTED_DATE:
            return {
                selectedDate: action.payload,
                selectedDateElement: state.selectedDateElement,
                activeStep: state.activeStep
            }

        case SET_STEP_0:
            return {
                selectedDate: state.selectedDate,
                selectedDateElement: state.selectedDateElement,
                activeStep: 0
            }

        case SET_STEP_1:
            return {
                selectedDate: state.selectedDate,
                selectedDateElement: state.selectedDateElement,
                activeStep: 1
            }

        case SET_STEP_2:
            return {
                selectedDate: state.selectedDate,
                selectedDateElement: state.selectedDateElement,
                activeStep: 2
            }

        default:
            return state
    }
}
