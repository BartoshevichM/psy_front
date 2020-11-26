import React, {Component, Fragment} from "react";
import { getDownRow, getUpRow } from '../../../utils/calendar/calculateDays'

class WeekDays extends Component {
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    date = new Date()
    dateNow = this.date.getDate()
    yearNow = this.date.getFullYear()
    monthNow = this.date.getMonth()
    weekDayNow = this.date.getDay()


    render() {
        return(
            <Fragment>

            </Fragment>
        )
    }
}

export default WeekDays
