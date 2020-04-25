import {SET_EMAIL, SET_NAME, SET_PHONE} from "../actions/actionTypes";

const initialState = {
    name: null,
    phone: null,
    email: null
}

export default function subscriberInfo(state = initialState, action) {
    switch (action.type) {

        case SET_NAME:
            return {
                name: action.payload,
                phone: state.phone,
                email: state.email
            }

        case SET_PHONE:
            return {
                name: state.name,
                phone: action.payload,
                email: state.email
            }

        case SET_EMAIL:
            return {
                name: state.name,
                phone: state.phone,
                email: action.payload
            }

        default:
            return state
    }
}
