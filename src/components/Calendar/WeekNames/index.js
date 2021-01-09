import React, {Fragment} from "react"
import classes from './weekName.module.css'
import {WEEK_DAYS} from '../../../constants/calendar'

export default function WeekNames() {

    return (
        <Fragment>
            <div className={classes.dayName}>
                {WEEK_DAYS.map((dayName, i) => <div key={`dayName${i}`} className={classes.dName}>{dayName}</div>)}
            </div>
        </Fragment>
    )
}
