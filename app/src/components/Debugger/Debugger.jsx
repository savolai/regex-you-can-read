import React from 'react';
import styles from './Debugger.css';

export class Debug extends React.Component {

    constructor(props){
        super(props);
        this.state = { classes: styles.debugger };
    }

    componentWillReceiveProps() {
        let { active } = this.props;

        if (!active){
            this.setState({ classes: styles.debugger + ' ' + styles.active });
        }else{
            this.setState({ classes: styles.debugger });
        }
    }

    render() {

        return (
            <section className={this.state.classes}>
                <p>Debug here</p>
            </section>
        );
    }
}