import React, { Component} from 'react'
import { connect } from 'react-redux'

class Vote extends Component {
    render() {
        return(
            <div>
                <h1>Vote</h1>
                <hr/>
                <div>
                    <h3>Add question</h3>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Type your question" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                            </div>
                    </div>
                </div>
            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        questionList: state.questionList
    }
}

export default connect(mapStateToProps)(Vote)