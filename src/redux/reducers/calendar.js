import getCalendarArr from '../../utils/calendar/calculateDays'
import {SET_NEXT_MONTH, SET_PREV_MONTH} from '../actions/actionTypes'

let date = new Date()
const currentDate = new Date()
const dateNow = date.getDate()
let yearNow = date.getFullYear()
let monthNow = date.getMonth()
const weekDayNow = date.getDay()

const initialState = {
    currentDate,
    date,
    dateNow,
    yearNow,
    monthNow,
    weekDayNow,
    calendarArr: getCalendarArr(date)
}

export default function input(state = initialState, action) {
    switch (action.type) {
        case SET_NEXT_MONTH:
            if (monthNow === 11) {
                monthNow = -1
                ++yearNow
            }
            monthNow = ++monthNow
            date.setFullYear(yearNow, monthNow)
            return {
                currentDate,
                date,
                dateNow,
                yearNow,
                monthNow,
                weekDayNow,
                calendarArr: getCalendarArr(date)
            }

        case SET_PREV_MONTH:
            if (monthNow - 1 < 0) {
                monthNow = 12
                --yearNow
            }
            monthNow = --monthNow
            date.setFullYear(yearNow, monthNow)
            return {
                currentDate,
                date,
                dateNow,
                yearNow,
                monthNow,
                weekDayNow,
                calendarArr: getCalendarArr(date)
            }
        default:
            return state
    }
}
