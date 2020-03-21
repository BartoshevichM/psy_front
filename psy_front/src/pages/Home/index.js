import React, {Fragment} from "react";
import classes from './home.module.css'

export default function({ props }) {
    return (
        <Fragment>
            <video autoPlay muted loop className={classes.MyVideo}>
                <source src="vid.mp4" type="video/mp4" />
            </video>
            <div className={classes.Element}/>
        </Fragment>
    )
}
