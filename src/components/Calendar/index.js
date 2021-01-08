import React, {Component} from "react";
import classes from './calendar.module.css'
import WeekNames from "./WeekNames";
import WeekDays from "./WeekDays";

class Calendar extends Component {

    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    date = new Date()
    dateNow = this.date.getDate()
    yearNow = this.date.getFullYear()
    monthNow = this.date.getMonth()
    weekDayNow = this.date.getDay()


    render() {
        return(
            <div>
                <div className={classes.title}>
                    {this.dateNow} {this.months[this.monthNow]} {this.yearNow}
                </div>
                <div className={classes.DayDate}>
                    <WeekNames/>
                </div>
                <WeekDays/>
            </div>
        )
    }
}

export default Calendar
