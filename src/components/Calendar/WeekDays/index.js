import React, {Component, Fragment} from "react";
import classes from "./weekDays.module.css";
import {connect} from "react-redux";
import {setNextMonth, setPrevMonth, setSelectedCalendarDate} from "../../../redux/actions/actions";

class WeekDays extends Component {

    dayHandler = (day) => {
        const currentMonth = this.props.monthNow
        const selectedMonth = day.getMonth()
        console.log('current month: ', currentMonth)
        console.log('selectedMonth: ', selectedMonth)
        if (selectedMonth > currentMonth) {
            this.props.setNextMonth()
        } else if (selectedMonth < currentMonth) {
            this.props.setPrevMonth()
        }
        this.props.setSelectedCalendarDate(day)
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.calendarArr.map((row, i) =>
                        <div
                            key={`row${i}`}
                            className={classes.rowDate}> {row.map((day, index) =>
                            <div
                                key={`day${i}${index}`}
                                onClick={() => this.dayHandler(day.date)}
                                className={`${classes.dNum} ${day.classes.map(cl => classes[`${cl}`]).join(' ')} ${day.date === this.props.selectedDate ? classes['selected'] : ''}`}
                            >
                                {day.date.getDate()}
                            </div>)}
                        </div>)
                }
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        calendarArr: state.calendar.calendarArr,
        monthNow: state.calendar.monthNow,
        selectedDate: state.calendar.selectedDate
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNextMonth: () => dispatch(setNextMonth()),
        setPrevMonth: () => dispatch(setPrevMonth()),
        setSelectedCalendarDate: (date) => dispatch(setSelectedCalendarDate(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekDays)
