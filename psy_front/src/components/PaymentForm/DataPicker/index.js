import React, {Component} from "react"
import classes from './dataPicker.module.css'
import Calendar from 'react-calendar';

class DataPicker extends Component {
    state = {
        date: new Date(),
        selectedDate: new Date()
    }

    onChange = date => {
        this.setState({date})
        console.log('date: ', this.state.date)
    }

    onClickDayHandler = (date, event) => {
        console.log(event.target)
    }

    render() {
        return (
            <div className={classes.DataPicker}>
                <Calendar
                    onChange={this.onChange}
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

export default DataPicker
