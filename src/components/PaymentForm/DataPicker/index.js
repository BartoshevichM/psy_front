import React, {Component} from "react"
import {connect} from 'react-redux'
import classes from './dataPicker.module.css'
import Calendar from 'react-calendar';
import {setSelectedDate, setConsultationDate} from "../../../redux/actions/actions";

class DataPicker extends Component {
    state = {
        date: new Date()
    }

    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    setActiveClass(date) {
        const dateToFind = `${date.getDate()}${date.getMonth()}`
        const calendarArr = document.getElementsByClassName('react-calendar__tile react-calendar__month-view__days__day')

        for (let key of calendarArr) {
            let selectedDate = key.getElementsByTagName('abbr')[0].ariaLabel
            selectedDate = selectedDate.split(' ')
            selectedDate = selectedDate[0] + this.months.indexOf(selectedDate[1])
            if (selectedDate === dateToFind) {
                key.classList.add(classes.activeDate)
                return
            }
        }

    }

    onChangeHandler = date => {
        this.setActiveClass(date)
        this.props.setSelectedDate(date)
        this.props.setConsultationDate(date)
    }

    setNotActiveDate() {
        const arr = document.getElementsByClassName('react-calendar__tile react-calendar__month-view__days__day')
        const today = new Date()
        for (let key in arr) {
            if (today.getDate() === +arr[key].innerText) {
                arr[key].classList.add(classes.activeDate)
                this.props.setSelectedDate(today)
                return
            }
            arr[key].className = arr[key].className + ' ' + classes.noteActiveDate
        }
    }

    componentDidMount() {
        this.setNotActiveDate()
    }

    render() {
        return (
            <div className={classes.DataPicker}
            >
                <Calendar
                    locale="ru"
                    className={classes.Calendar}
                    minDate={new Date(Date.now())}
                    defaultValue={new Date(Date.now())}
                    onChange={this.onChangeHandler}
                    defaultActiveStartDate={this.state.date}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedDate: state.payment.selectedDate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedDate: (date) => dispatch(setSelectedDate(date)),
        setConsultationDate: (date) => dispatch(setConsultationDate(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPicker)
