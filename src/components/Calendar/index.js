import React, {Component} from "react";
import classes from './calendar.module.css'
import WeekNames from "./WeekNames";
import WeekDays from "./WeekDays";
import {MONTHS} from "../../constants/calendar"
import {connect} from "react-redux";

class Calendar extends Component {

    render() {
        return(
            <div>
                <div className={classes.title}>
                    {this.props.dateNow} {MONTHS[this.props.monthNow]} {this.props.yearNow}
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

export default connect(mapStateToProps)(Calendar)
