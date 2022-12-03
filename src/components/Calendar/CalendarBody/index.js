import React from 'react';
import Month from './Month';
import styles from './CalendarBody.module.css';
import { withCurrentDay } from '../../../HOCs/withCurrentDay';
import { format } from 'date-fns';


const CalendarBody = (props) => {

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    return (
        <div className={styles.rightContainer}>
            <div className={styles.monthAndYear}>{format(props.currentDay, 'MMMM yyyy')}</div> 
            <table>
                <thead>
                    <tr className={styles.tr}>
                        {weekDays.map((d, index) => <td key={index} className={styles.tr}>{d}</td>)}
                    </tr>
                </thead>
               
                <Month />
            </table>
        </div>
    );
}

const wrappedComponent = withCurrentDay(CalendarBody);

export default wrappedComponent;

