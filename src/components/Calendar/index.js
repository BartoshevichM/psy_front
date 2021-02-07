import React, {Component} from "react";
import classes from './calendar.module.css'
import WeekNames from "./WeekNames";
import WeekDays from "./WeekDays";
import {MONTHS} from "../../constants/calendar"
import {connect} from "react-redux";
import {setNextMonth, setPrevMonth} from "../../redux/actions/actions";

class Calendar extends Component {

    render() {
        return(
            <div>
                <div className={classes.wrapper}>
                    <div className={classes.title}>
                        {this.props.dateNow} {MONTHS[this.props.monthNow]} {this.props.yearNow}
                    </div>
                    <div className={classes.calendarControl}>
                        <div onClick={this.props.setPrevMonth}>{'prev_'}</div>
                        <div onClick={this.props.setNextMonth} >{'_next'}</div>
                    </div>
                </div>
                <div className={classes.DayDate}>
                    <WeekNames/>
                </div>
                <WeekDays/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dateNow: state.calendar.dateNow,
        yearNow: state.calendar.yearNow,
        monthNow: state.calendar.monthNow,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNextMonth: () => dispatch(setNextMonth()),
        setPrevMonth: () => dispatch(setPrevMonth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
