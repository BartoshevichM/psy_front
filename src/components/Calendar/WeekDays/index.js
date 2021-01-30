import React, {Component, Fragment} from "react";
import classes from "./weekDays.module.css";
import {connect} from "react-redux";

class WeekDays extends Component {

    render() {
        return (
            <Fragment>
                {
                    this.props.calendarArr.map((row, i) => <div key={`row${i}`}
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
        calendarArr: state.calendar.calendarArr
    }
}

export default connect(mapStateToProps)(WeekDays)
