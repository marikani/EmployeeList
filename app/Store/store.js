import { createStore, applyMiddleware } from 'redux';
// Thunk
import thunk from 'redux-thunk';
// Reducer
import UserReducer from '../reducers/UserReducer';

export default createStore(UserReducer, {}, applyMiddleware(thunk));