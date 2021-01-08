import React, {Component, Fragment} from "react";
import  getCalendarArr  from '../../../utils/calendar/calculateDays'
import classes from "./weekDays.module.css";

class WeekDays extends Component {
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
constructor() {
    super();
    // this.date = new Date()
    this.date = new Date()

    this.dayNow = this.date.getDate()
    this.yearNow = this.date.getFullYear()
    this.monthNow = this.date.getMonth()
    this.weekDayNow = this.date.getDay()
    this.calendarArr = getCalendarArr(this.weekDayNow, this.dayNow, this.monthNow, this.yearNow, this.date)
}

    render() {
        return(
            <Fragment>
                {
                    this.calendarArr.map((row, i) => <div key={`row${i}`} className={classes.rowDate}> {row.map((day, index) => <div key={`day${i}${index}`} className={`${classes.dNum} ${day.classes.map(cl => classes[`${cl}`]).join(' ')}`}>{day.date.getDate()}</div>)} </div>)
                }
            </Fragment>
        )
    }
}

export default WeekDays
