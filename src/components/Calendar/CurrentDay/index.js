import React from 'react';
import { format } from 'date-fns';
import styles from './CurrentDay.module.css';
import { withCurrentDay } from '../../../HOCs/withCurrentDay';

const CurrentDay = (props) => {
    
    const {currentDay} = props;

    return (
        <div className={styles.leftContainer}>
            <p className={styles.text}>{format(currentDay, 'cccc')}</p>
            <p className={styles.number}>{format(currentDay, 'd')}</p>
        </div>
    );
}

const wrappedComponent = withCurrentDay(CurrentDay);

export default wrappedComponent;
