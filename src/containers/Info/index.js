import React, { Component} from 'react'
import { connect } from 'react-redux'
import actionChange from '../../actions/actionChange'
import InfoComponent from './Info'

class Info extends Component {

    render() {
        return (
            <InfoComponent count={this.props.count} changeNumFunction={this.props.changeNumFunction} />
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeNumFunction: num => {
            dispatch(actionChange(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)