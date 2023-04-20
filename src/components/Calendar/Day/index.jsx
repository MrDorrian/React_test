import {format} from "date-fns";

export function Day(props) {
    const {day} = props;
    return <td>{format(day, 'd')}</td>
}
