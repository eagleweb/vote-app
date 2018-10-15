import { combineReducers } from 'redux'
import questionReducer from './questions'
import counter from './counter'

const rootReducer = combineReducers({
    questionReducer,
    counter
});

export default rootReducer