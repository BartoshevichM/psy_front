import React from "react"
import classes from "./menuItems.module.css";
import {ABOUT, ARTICLE, SERVICES, SIGNUP_ON_CONSULTATION} from "../../../constants/menu";

export default function ({props}) {
    return (
        <div className={classes.MenuNameTop}>
            <div className={classes.MenuItem}>{SIGNUP_ON_CONSULTATION}</div>
            <div className={classes.MenuItem}>{SERVICES}</div>
            <div className={classes.MenuItem}>{ARTICLE}</div>
            <div className={classes.MenuItem}>{ABOUT}</div>
        </div>
    )
}
