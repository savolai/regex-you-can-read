import { connect } from 'react-redux';
import { editor } from '../components/Editor/Editor.jsx';

function mapStateToProps(state) {
    return state;
}

export const Editor = connect(
    mapStateToProps
)(editor);