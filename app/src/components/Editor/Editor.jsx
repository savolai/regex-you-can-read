import React from 'react';
import styles from './Editor.css';

export class editor extends React.Component {
    render() {
        let { onRegexChange, regex } = this.props;

        return (
            <div className={styles.editor}>
                <input value={regex} onChange={ (e) => onRegexChange(e.target.value) }/>
            </div>
        );
    }
}