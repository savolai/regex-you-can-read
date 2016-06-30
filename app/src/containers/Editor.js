import { connect } from 'react-redux';
import { editor } from '../components/Editor/Editor.jsx';
import { changeRegex } from '../actions';

function mapStateToProps(state) {
    let { editorReducer } = state;

    return { regex: editorReducer.regex };
}

function mapDispatchToState(dispatch) {
    return {
        onRegexChange: (regex) => {
            dispatch(changeRegex(regex));
        }
    }
}

export const Editor = connect(
    mapStateToProps,
    mapDispatchToState
)(editor);