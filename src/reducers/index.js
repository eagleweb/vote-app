import { combineReducers } from 'redux'
import questionList from './questions'
import counter from './counter'

const rootReducer = combineReducers({
    questionList,
    counter
})

export default rootReducer