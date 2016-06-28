import React from 'react';
import styles from './Toolbar.css';

export class Toolbar extends React.Component {
    render(){
        return (
            <nav className={styles.toolbar}>
                <button className={styles.debug}>Debug</button>
                <ul>
                    <li>Toggle Editor</li>
                    <li>Element Explainer</li>
                    <li>Plugins</li>
                </ul>
            </nav>
        );
    }
}