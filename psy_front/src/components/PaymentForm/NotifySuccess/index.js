import React, {Component, Fragment} from "react"
import {connect} from "react-redux";
import classes from './notifySuccess.module.css'

class NotifySuccess extends Component{
    getDate(date) {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div className={classes.Success}>Вы записаны на консультацию!</div>
                <div className={classes.Success}>{this.getDate(this.props.consultationDate)} В {this.props.consultationTime}</div>
                <div className={classes.Info}>подробности будут высланы на ваш емаил </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        consultationDate: state.subscriberInfo.consultationInfo.consultationDate,
        consultationTime: state.subscriberInfo.consultationInfo.consultationTime,
    }
}

export default connect(mapStateToProps)(NotifySuccess)

