import React, {Fragment} from "react"
import classes from './weekName.module.css'

export default function WeekNames() {
    const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    return (
        <Fragment>
            <div className={classes.dayName}>
                {week.map((dayName, i) => <div key={`dayName${i}`} className={classes.dName}>{dayName}</div>)}
            </div>
        </Fragment>
    )
}
