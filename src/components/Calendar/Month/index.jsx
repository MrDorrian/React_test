import React from 'react';
import {getWeek, getYear} from 'date-fns';
import Week from "../Week";

const Month = props => {
    const {date} = props;
    const week = getWeek(date);
    const year = getYear(date);

    const yearArray = [];

    for (let i = 0; i < 6; i++) {
        yearArray.push(
            <Week
                key={`${year}-${week}`}
                year={year}
                week={week + i}
                date={date}
            />
        );
    }

    return <>{[yearArray]}</>;
};

export default Month;
