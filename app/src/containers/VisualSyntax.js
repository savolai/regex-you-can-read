import { connect } from 'react-redux';
import { visualSyntax } from '../components/VisualSyntax/VisualSyntax.jsx';

function mapStateToProps(state) {
    return state;
}

export const VisualSyntax = connect(
    mapStateToProps
)(visualSyntax);