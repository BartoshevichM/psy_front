import React, {Component} from "react"
import {connect} from 'react-redux'
import classes from './navigation.module.css'
import HamMenu from './HamMenu'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.props.setClsMenu()
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.target.scrollingElement.scrollTop

        if (scrollTop > 200 && this.props.clsMenu.length < 2 && !this.props.isMenuActive) {
            this.props.setActiveClsMenu()
        }

        if (scrollTop < 200 && this.props.clsMenu.length > 1) {
            this.props.setClsMenu()
        }
    }

    render() {
        return (
            <div
                className={this.props.clsMenu.join(' ')}
                onScroll={this.handleScroll}
            >
                <div className={classes.MenuWrapper}>
                    <HamMenu
                        onToggle={this.props.openCloseMenu}
                        isOpen={this.props.isMenuActive}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.isMenuActive,
        clsMenu: state.clsMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openCloseMenu: () => dispatch({ type: 'OPEN_CLOSE' }),
        setActiveClsMenu: () => dispatch({ type: 'SET_ACTIVE_CLS_MENU', payload: [classes.Navigation, classes.scroll] }),
        setClsMenu: () => dispatch({ type: 'SET_CLS_MENU', payload: [classes.Navigation] })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
