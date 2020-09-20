import React, {Component} from "react"
import classes from './menu.module.css'
import {connect} from 'react-redux'

class Menu extends Component {
    render() {
        return (
            this.props.isMenuActive ?
                <div className={classes.Menu}>
                    <div className={classes.point}>
                        <div className={classes.menuItem}>Статьи</div>
                    </div>
                    <div className={classes.point}>
                        <div className={classes.menuItem}>Записаться на консультацию</div>
                    </div>
                    <div className={classes.point}>
                        <div className={classes.menuItem}>Услуги</div>
                    </div>
                </div> : ''
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isMenuActive,
    }
}

export default connect(mapStateToProps)(Menu)
