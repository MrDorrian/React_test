import React, {Component} from 'react';
import {format} from "date-fns";
import Month from "../Month";

class CurrentMonth extends Component {
    render() {
        const {date} = this.props;
        return (
            <div>
                <h2>{format(date, 'LLLL yyyy')}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                    </thead>
                    <tbody>
                    <Month date={date}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrentMonth;
