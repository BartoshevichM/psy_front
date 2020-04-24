import React, {Component} from "react"
import classes from './time.module.css'

class Time extends Component {
    render() {
        return (
            <div className={classes.Time}>
                <div className={classes.Column}>
                    <div className={classes.time_item}>9:00-10:00</div>
                    <div className={classes.time_item}>10:15-11:15</div>
                    <div className={classes.time_item}>11:30-12:30</div>
                </div>
                <div className={classes.Column}>
                    <div className={classes.time_item}>12:45-13:45</div>
                    <div className={classes.time_item}>14:00-15:00</div>
                    <div className={classes.time_item}>15:15-16:15</div>
                </div>
                <div className={classes.Column}>
                    <div className={classes.time_item}>17:30-18:30</div>
                    <div className={classes.time_item}>18:45-19:45</div>
                    <div className={classes.time_item}>20:00-21:00</div>
                </div>
            </div>
        )
    }
}

export default Time
