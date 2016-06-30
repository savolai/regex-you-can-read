import { combineReducers } from 'redux';
import { editorReducer } from './editorReducer';
import { debuggerReducer } from './debuggerReducer';

export const rootReducer = combineReducers({
    editorReducer,
    debuggerReducer
});