import React, { Component} from 'react'
import { connect } from 'react-redux'

class Vote extends Component {
    render() {
        return(
            <div>
                <h2>Vote</h2>
                <div>
                    {Object.keys(this.props.questionList).map(questionId => (
                        <ul key={questionId}>
                            <li>{this.props.questionList[questionId]}</li>
                        </ul>
                    ))}
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