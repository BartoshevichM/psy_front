import React, {Component} from "react"
import classes from './navigation.module.css'
import HamMenu from './HamMenu'

class Navigation extends Component {

    state = {
        menu: false,
        clsMenu: [classes.Navigation]
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.target.scrollingElement.scrollTop
        if (scrollTop > 200 && this.state.clsMenu.length < 2) {
            this.setState({
                clsMenu: [classes.Navigation, classes.scroll]
            })
        }
        if (scrollTop < 200 && this.state.clsMenu.length > 1) {
            this.setState({
                clsMenu: [classes.Navigation]
            })
        }
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div
                className={this.state.clsMenu.join(' ')}
                onScroll={this.handleScroll}
            >
                <div className={classes.MenuWrapper}>
                    <HamMenu
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                </div>
            </div>
        )
    }


}

export default Navigation
