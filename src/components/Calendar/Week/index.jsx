import React from 'react';
import {parse, addDays} from 'date-fns';
import {Day} from "../Day";

const Week = props => {
    const {year, week, date} = props;

    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

    const dayArray = [];

    for (let i = 0; i < 7; i++) {
        dayArray.push(
            <Day
                key={`${i}-${year}-${week}`}
                day={addDays(startOfWeek, i)}
                date={date}
            />
        );
    }
    return <tr>{[dayArray]}</tr>;
};

export default Week;

