import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import counterReducer from './counterReducer'


export default combineReducers({
    questions: questionsReducer,
    counter: counterReducer
});
