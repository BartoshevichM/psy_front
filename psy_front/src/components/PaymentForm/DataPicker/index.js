import React, {Component} from "react"
import {connect} from 'react-redux'
import classes from './dataPicker.module.css'
import Calendar from 'react-calendar';
import {clearSelectedDate, setSelectedDate} from "../../../redux/actions/actions";

class DataPicker extends Component {
    state = {
        date: new Date()
    }

    onClickDayHandler = date => {
        this.props.setSelectedDate(date)
    }

    componentDidMount() {
        const arr = document.getElementsByClassName('react-calendar__tile react-calendar__month-view__days__day')
        const today = new Date()
        for (let key in arr) {
            if (today.getDate() + 1 == arr[key].innerText) {
                arr[key].focus()
                this.props.setSelectedDate(today)
                return
            }
            arr[key].className = arr[key].className + ' ' +classes.noteActiveDate
        }
    }

    render() {
        return (
            <div className={classes.DataPicker}>
                <Calendar
                    value={this.state.date}
                    locale="ru"
                    className={classes.Calendar}
                    minDate={new Date(Date.now())}
                    defaultValue={new Date(Date.now())}
                    onClickDay={this.onClickDayHandler}
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
        clearSelectedDate: () => dispatch(clearSelectedDate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPicker)
