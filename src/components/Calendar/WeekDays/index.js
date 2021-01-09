import React, {Component, Fragment} from "react";
import getCalendarArr from '../../../utils/calendar/calculateDays'
import classes from "./weekDays.module.css";
import {connect} from "react-redux";

class WeekDays extends Component {

    calendarArr = getCalendarArr(
            this.props.weekDayNow,
            this.props.dateNow,
            this.props.monthNow,
            this.props.yearNow,
            this.props.date
        )

    render() {
        return (
            <Fragment>
                {
                    this.calendarArr.map((row, i) => <div key={`row${i}`}
                                                          className={classes.rowDate}> {row.map((day, index) => <div
                        key={`day${i}${index}`}
                        className={`${classes.dNum} ${day.classes.map(cl => classes[`${cl}`]).join(' ')}`}>{day.date.getDate()}</div>)} </div>)
                }
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.calendar.date,
        dateNow: state.calendar.dateNow,
        yearNow: state.calendar.yearNow,
        monthNow: state.calendar.monthNow,
        weekDayNow: state.calendar.weekDayNow
    }
}

export default connect(mapStateToProps)(WeekDays)
