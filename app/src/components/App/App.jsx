import React from 'react';
import { Editor } from '../../containers/Editor';
import { VisualSyntax } from '../../containers/VisualSyntax';
import { Toolbar } from '../../containers/Toolbar';
import { Debugger } from '../../containers/Debugger';

import styles from './App.css';

export class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                <Toolbar />
                <Debugger />

                <section className={styles.container}>
                    <Editor />
                    <VisualSyntax />
                </section>
            </div>
        );
    }
}

