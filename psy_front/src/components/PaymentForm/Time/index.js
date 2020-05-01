import React, {Component} from "react"
import classes from './time.module.css'
import {connect} from "react-redux";

class Time extends Component {

    subScheduler = [
        {
            month: 3,
            scheduler: [
                {date: 29, time: [1, 5]},
                {date: 30, time: [3, 4, 2]}
            ]
        },
        {
            month: 4,
            scheduler: [
                {date: 0, time: [1, 5]},
                {date: 1, time: [3, 4, 2]},
                {date: 2, time: [3, 4, 5]},
                {date: 3, time: [1, 2]}
            ]
        },
    ]

    subscribeTime = [
        '9:00-10:00', '10:15-11:15', '11:30-12:30',
        '12:45-13:45', '14:00-15:00', '15:15-16:15',
        '17:30-18:30', '18:45-19:45', '20:00-21:00']

    computeClassName(timeId) {
        const notActive = `${classes.time_item} ${classes.not_active}`
        const month = this.props.selectedDate.getMonth()
        const date = this.props.selectedDate.getDate()
        const shed = this.subScheduler.find(el => el.month === month)

        //set not active time for today
        if (month === new Date().getMonth() && date === new Date().getDate()) return notActive

        const findDays = shed.scheduler.find(el => el.date === date)

        if (findDays) {
            const timeArr = findDays.time
            if (timeArr.includes(timeId)) return notActive
        }
        return classes.time_item
    }

    timeRender() {
        let content = []
        let res = []
        let j = 0

        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < 3; i++) {
                content.push(
                    <div
                        className={this.computeClassName(j + 1)}
                    >{this.subscribeTime[j]}
                    </div>)
                j++
            }
            res.push(<div className={classes.Column}>{[...content]}</div>)
            content.length = 0
        }

        return res
    }

    render() {
        return (
            <div className={classes.Time}>
                {this.timeRender()}
            </div>
        )
    }
}

function

mapStateToProps(state) {
    return {
        selectedDate: state.payment.selectedDate,
    }
}

export default connect(mapStateToProps)(Time)
