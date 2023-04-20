import React, {Component} from 'react';
import styles from './calendar.module.css';
import {CurrentDay} from "./CurrentDay";
import CurrentMonth from "./CurrentMonth";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        const {date} = this.state;
        return (
            <div className={styles.wrapperBlock}>
                <div className={styles.leftBlock}>
                    <CurrentDay date={date}/>
                </div>
                <div className={styles.rightBlock}>
                    <CurrentMonth date={date}/>
                </div>
            </div>
        );
    }
}

export default Calendar;

