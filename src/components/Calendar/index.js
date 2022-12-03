import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import CurrentDayContext from "../../contexts/CurrentDayContext";
import styles from './Calendar.module.css';


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date(),
        }
    }

    getActiveCallback = (date) => {
        console.log(date);
        this.setState({
            currentDay: date 
        })
    }

    render() {
        const {currentDay} = this.state;
        return (
            <div className={styles.wrapper}>
                <CurrentDayContext.Provider value={[currentDay, this.getActiveCallback]}>
                    <CurrentDay />
                    <CalendarBody /> 
                </CurrentDayContext.Provider>
            </div>
        );
    }
}

export default Calendar;
