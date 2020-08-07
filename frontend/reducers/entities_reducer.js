import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer,
});

export default entitiesReducer;