import "./clock.css"
import { useEffect, useState } from "react";

function Clock(){

    {/* dito na nakastore yung exact time*/}
    const [time, setTime] = useState(new Date());

    {/*runs when component appears */}
    useEffect (() => {

        {/*every 1 sec*/}
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        {/*tigil yung timer kapag yung Clock ay removed*/}
        return () => clearInterval(interval);
    }, [])

    const hour = time.getHours();
    const minute = time.getMinutes();

    const midnight = hour === 0
        ? hour + 12
        :  hour;

    const nonMilitaryHour = hour > 12 
        ? hour - 12 
        : hour;
    
    const realHour = nonMilitaryHour === 0
        ? midnight
        : nonMilitaryHour;

    const timeIndicates = [
        "AM",
        "PM"
    ];

    const timeIndicator = time.getHours() < 12
        ? timeIndicates[0] 
        : timeIndicates[1];

    return(
        <div className="mainClock">
            <div className="clockAdjust">
                <div className="time">
                    <p>
                        {realHour}:{minute < 10 ? "0" + minute: minute}
                    </p>
                </div>
                <div className="timeIndicate">
                    <p>
                        {timeIndicator}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Clock