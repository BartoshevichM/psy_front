import React, {Component, Fragment} from "react";
import classes from './navigation.module.css'
import HamMenu from './HamMenu'

class Navigation extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <Fragment>
                <div className={classes.Navigation}>
                    <div className={classes.MenuWrapper}>
                        <HamMenu
                            onToggle={this.toggleMenuHandler}
                            isOpen={this.state.menu}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }


}

export default Navigation
