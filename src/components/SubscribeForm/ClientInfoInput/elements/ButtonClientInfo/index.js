import React , { Component } from "react";
import Button from "../../../../UI/Button";
import {setStep1} from "../../../../../redux/actions/actions";
import {connect} from 'react-redux'

class ButtonClientInfo extends Component {

    render() {
        return(
            <Button
                type="payment"
                onClick={this.props.setStep1}
            > Продолжить
            </Button>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        setStep1: () => dispatch(setStep1())
    }
}

export default connect(null, mapDispatchToProps)(ButtonClientInfo)
