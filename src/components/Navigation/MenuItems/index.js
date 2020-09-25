import React, {Component} from "react"
import classes from "./menuItems.module.css";
import {ABOUT, ARTICLE, SERVICES, SUBSCRIBE} from "../../../constants/menu";
import {NavHashLink as NavLink} from 'react-router-hash-link';
import { withRouter } from 'react-router-dom'

class MenuItems extends Component {
    render() {
        return (
            <div className={classes.MenuNameTop}>
                <div className={classes.MenuItem}>
                    <NavLink exact smooth strict to='/#subscribe'>
                        {SUBSCRIBE}
                    </NavLink>
                    </div>
                <div className={classes.MenuItem}>
                    <NavLink
                        exact
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        strict
                        to='/#services'>
                        {SERVICES}
                    </NavLink>
                </div>
                <div className={classes.MenuItem}>
                <NavLink exact smooth strict to='/#article'>
                    {ARTICLE}
                </NavLink>
                </div>
                <div className={classes.MenuItem}>
                    <NavLink exact
                             strict
                             smooth to='/#about'>
                        {ABOUT}
                    </NavLink>
                </div>
            </div>
        )
    }
    }

export default withRouter(MenuItems)
