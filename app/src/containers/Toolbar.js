import { connect } from 'react-redux';
import { toolbar } from '../components/Toolbar/Toolbar.jsx';
import { toggleDebugger } from '../actions';

function mapDispatchToState(dispatch) {
    return {
        onDebugToggle: () => {
            dispatch( toggleDebugger() );
        }
    }
}

export const Toolbar = connect(
    null,
    mapDispatchToState
)(toolbar);