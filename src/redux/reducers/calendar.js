const date = new Date()
const initialState = {
    date,
    dateNow: date.getDate(),
    yearNow: date.getFullYear(),
    monthNow: date.getMonth(),
    weekDayNow: date.getDay()
}

export default function input(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
