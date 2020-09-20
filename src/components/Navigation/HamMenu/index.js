import React, {Fragment} from "react";
import classes from "./hamMenu.module.css"

export default function (props) {
    const cls = [
        [classes.MenuGlobal, classes.MenuTop],
        [classes.MenuGlobal, classes.MenuMiddle],
        [classes.MenuGlobal, classes.MenuBottom]
    ]

    const clsClick = [
        classes.MenuTopClick,
        classes.MenuMiddleClick,
        classes.MenuBottomClick
    ]

    if (props.isOpen) {
        for (let [index, el] of cls.entries()) {
            el.push(clsClick[index])
        }
    }

    return (
        <Fragment>
            <div
                className={classes.Menu}
                onClick={props.onToggle}
            >
                <span className={cls[0].join(' ')}/>
                <span className={cls[1].join(' ')}/>
                <span className={cls[2].join(' ')}/>
            </div>
        </Fragment>
    )
}
