import React from 'react';
import { Editor } from '../../containers/Editor';
import { VisualSyntax } from '../../containers/VisualSyntax';
import { Toolbar } from '../Toolbar/Toolbar.jsx';

import styles from './App.css';

export class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                <Toolbar />
                <div className={styles.container}>
                    <Editor />
                    <VisualSyntax />
                </div>
            </div>
        );
    }
}

