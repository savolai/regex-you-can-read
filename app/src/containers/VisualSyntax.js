import { connect } from 'react-redux';
import { visualSyntax } from '../components/VisualSyntax/VisualSyntax.jsx';

function mapStateToProps(state) {
    let { editorReducer } = state;

    return {
        regex: editorReducer.regex
    };
}

export const VisualSyntax = connect(
    mapStateToProps
)(visualSyntax);