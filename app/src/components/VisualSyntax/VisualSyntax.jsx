import React from 'react';
import styles from './VisualSyntax.css';

export class visualSyntax extends React.Component {
    render() {
        let { regex } = this.props;

        return (
            <div className={ styles.visualSyntax }>
                <p>{ regex }</p>
            </div>
        );
    }
}