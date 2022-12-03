import React from 'react';
import Day from '../Day';
import { addDays, parse} from 'date-fns';
import { withCurrentDay } from '../../../../HOCs/withCurrentDay';

const Week = (props) => {

    const {year, week} = props;
    const startOfWeek = parse(`${year} ${week}`, 'Y ww', new Date());  // поверне дату початка тижня

    const arr = new Array(7)
                    .fill(null)
                    .map((el, index) => <Day day={addDays(startOfWeek, index)} key = {index} />) 
    return (
        <tr>
            {arr}    
        </tr>
    );
}

const wrappedComponent = withCurrentDay(Week);

export default wrappedComponent;
