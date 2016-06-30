import React from 'react';
import styles from './Toolbar.css';

export class toolbar extends React.Component {
    render() {
        let { onDebugToggle } = this.props;

        return (
            <nav className={styles.toolbar}>
                <button className={styles.debug} onClick={onDebugToggle}>Debug</button>
                <ul>
                    <li>Toggle Editor</li>
                    <li>Element Explainer</li>
                    <li>Plugins</li>
                </ul>
            </nav>
        );
    }
}