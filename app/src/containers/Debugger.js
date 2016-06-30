import { connect } from 'react-redux';
import { Debug } from '../components/Debugger/Debugger.jsx';

function mapStateToProps(state) {
    let { debuggerReducer } = state;
    return { active: debuggerReducer.active };
}

export const Debugger = connect(
    mapStateToProps
)(Debug);