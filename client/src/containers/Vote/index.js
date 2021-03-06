import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/questionActions'
import PropTypes from 'prop-types';

class Vote extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.questions;
        console.log(questions);
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
                    {questions.map(({ _id, question }) => (
                        <span key={_id}>
                            {question}
                        </span>
                    ))}
                </div>
            )
    }
}

// Vote.propTypes = {
//     getQuestions: PropTypes.func.isRequired,
//     questions: PropTypes.object.isRequired
// };

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
};

// const mapDispatchToProps = () => {
//     return {
//         getQuestions: getQuestions
//     }
// };

export default connect(mapStateToProps, {getQuestions})(Vote)