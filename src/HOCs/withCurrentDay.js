import CurrentDayContext from "../contexts/CurrentDayContext"

export const withCurrentDay = (Component) => (props) => (
        <CurrentDayContext.Consumer>
            {([currentDay, getActive]) => {
                return <Component currentDay={currentDay} getActive={getActive} {...props}/>
            }}
        </CurrentDayContext.Consumer>
    );