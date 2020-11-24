import React, {Fragment} from "react";
import classes from './home.module.css'

export default function({ props }) {

    return (
        <div className={classes.Home}>
            <video
                autoPlay
                muted
                loop
                className={classes.MyVideo}
            >
                <source src="vid.mp4" type="video/mp4" />
            </video>
            <div className={classes.Title} id='home'>
                <div>Olga Galperyna
                    <div className={classes.titleSmall}>consultant</div>
                </div>
            </div>
        </div>
    )
}
