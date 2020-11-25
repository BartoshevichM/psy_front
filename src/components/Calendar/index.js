import React, {Component} from "react";
import classes from './calendar.module.css'

class Calendar extends Component {

    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    date = new Date()
    dateNow = this.date.getDate()
    yearNow = this.date.getFullYear()
    monthNow = this.date.getMonth()
    weekDayNow = this.date.getDay()

    getUpRow = (currentDay, currentMonth, currentYear) => {
        let arr = []
        let weekDay = 7
        let full = false
        while (weekDay > 0){
            if(currentDay === 1){
                const month = currentMonth -1 >=0 ? currentMonth -1 : 11
                const year = month !== 11 ? currentYear : currentYear - 1
                currentDay = this.getMaxDays(month, year) + 1
                full = true
            }
            arr[--weekDay] = Math.abs(--currentDay)
        }
        return {currentDay, arr, full}
    }

    getDownRow = (currentDay, maxDays) => {
        let arr = []
        let weekDay = -1
        while (weekDay < 6) {
            if (currentDay === maxDays) {
                currentDay = 0
            }
            arr[++weekDay] = ++currentDay
        }
        return{currentDay, arr}
    }

    getMaxDays = (currentMonth, currentYear) => {
        if(currentMonth === 1){
            const isLeap = new Date(currentYear, 1, 29).getMonth() === 1
            return isLeap ? 29 : 28
        }
        if(!currentMonth%2){
            return 30
        }
        return 31
    }

    fillCalendarArr() {
        let res = []

        const maxDays = this.getMaxDays(1, 2021)

        let weekDay = 4
        let dateNow = this.dateNow

        let startDay = dateNow - (weekDay)
        let isFull = false

        while (!isFull) {
            const { currentDay, arr, full } = this.getUpRow(startDay, this.monthNow, this.yearNow)
            startDay = currentDay
            res.unshift(arr)
            isFull = full
        }
        startDay = dateNow - (weekDay) - 1
        while (res.length < 6) {
            const { currentDay, arr } = this.getDownRow(startDay, maxDays)
            startDay = currentDay
            res.push(arr)
        }

        console.log(res)
    }

    render() {
        this.fillCalendarArr()
        return(
            <div>
                <div>
                    {this.dateNow} {this.months[this.monthNow]} {this.yearNow}
                </div>
                <div className={classes.DayDate}>
                    <div className={classes.dayName}>
                        <div className={classes.dName}>{this.week[0]}</div>
                        <div className={classes.dName}>{this.week[1]}</div>
                        <div className={classes.dName}>{this.week[2]}</div>
                        <div className={classes.dName}>{this.week[3]}</div>
                        <div className={classes.dName}>{this.week[4]}</div>
                        <div className={classes.dName}>{this.week[5]}</div>
                        <div className={classes.dName}>{this.week[6]}</div>
                    </div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
                <div className={classes.rowDate}>
                    <div className={classes.dNum}>1</div>
                    <div className={classes.dNum}>2</div>
                    <div className={classes.dNum}>3</div>
                    <div className={classes.dNum}>4</div>
                    <div className={classes.dNum}>5</div>
                    <div className={classes.dNum}>6</div>
                    <div className={classes.dNum}>7</div>
                </div>
            </div>
        )
    }

}

export default Calendar
