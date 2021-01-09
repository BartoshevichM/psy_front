import React, {Component} from "react"
import classes from './time.module.css'
import {connect} from "react-redux";
import {setConsultationTime} from "../../../redux/actions/actions";

class Time extends Component {
    state = {activeElement: null}

    subScheduler = [
        {
            month: 5,
            scheduler: [
                {date: 22, time: [1, 5]},
                {date: 23, time: [1, 5]},
                {date: 24, time: [1, 5]},
                {date: 25, time: [3, 4, 2]}
            ]
        },
        {
            month: 9,
            scheduler: [
                {date: 0, time: [1, 5]},
                {date: 1, time: [3, 4, 2]},
                {date: 28, time: [3, 4, 5]},
                {date: 30, time: [1, 5]}
            ]
        },
    ]

    subscribeTime = [
        '9:00-10:00', '10:15-11:15', '11:30-12:30',
        '12:45-13:45', '14:00-15:00', '15:15-16:15',
        '17:30-18:30', '18:45-19:45', '20:00-21:00']

    computeClassName(timeId) {
        const notActive = `${classes.timeItem} ${classes.notActive}`
        const month = this.props.selectedDate.getMonth()
        const date = this.props.selectedDate.getDate()
        const shed = this.subScheduler.find(el => el.month === month)

        //set not active time for today
        if (month === new Date().getMonth() && date === new Date().getDate()) return notActive

        const findDays = shed ? shed.scheduler.find(el => el.date === date) : null

        if (findDays) {
            const timeArr = findDays.time
            if (timeArr.includes(timeId)) return notActive
        }
        return classes.timeItem
    }

    onClickHandler = e => {
        e.preventDefault()
        let cls = e.target.classList
        if (!cls.value.includes('notActive')) {
            this.setState({activeElement: e.target.innerText})
            this.props.setConsultationTime(e.target.innerText)
        }
    }

    timeRender() {
        let content = []
        let res = []
        let j = 0

        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < 3; k++) {
                content.push(
                    <div
                        key={j}
                        className={`${this.computeClassName(j + 1)} ${this.subscribeTime[j] === this.state.activeElement ? classes.activeTime : ''}`}
                        onClick={this.onClickHandler}
                    >
                        {this.subscribeTime[j]}
                    </div>
                )
                j++
            }
            res.push(<div key={Math.random()} className={classes.Column}>{[...content]}</div>)
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

function mapStateToProps(state) {
    return {
        selectedDate: state.subscribeProgress().selectedDate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setConsultationTime: (time) => dispatch(setConsultationTime(time)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)
