import React, {Component} from 'react';
import {format} from "date-fns";
import style from './currentDay.module.css';

export class CurrentDay extends Component {
    render() {
        const {date} = this.props;
        return (
            <div className={style.wrapperCurrentDay}>
                <div className={style.dayOfWeek}>{format(date, 'EEEE')}</div>
                <div className={style.dateOfWeek}>{format(date, 'd')}</div>
            </div>
        );
    }
}
