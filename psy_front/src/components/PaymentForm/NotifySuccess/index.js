import React, {Fragment} from "react"
import classes from './notifySuccess.module.css'

export default function (props) {
    return (
        <Fragment>
            <div className={classes.Success}>Вы записаны на консультацию!</div>
            <div className={classes.dummyPositioning}>

                <div className="success-icon">
                    <div className={classes.successIcon}/>
                    <div className={classes.successIcon}/>
                </div>

            </div>
            <div className={classes.Info}>подробности будут высланы на ваш емаил</div>
        </Fragment>
    )
}