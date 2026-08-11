import "./clock.css"

function Clock(){
    const time = new Date();
    
    const hour = time.getHours();
    const minute = time.getMinutes();

    const midnight = hour === 0
        ? hour + 12
        :  hour

    const nonMilitaryHour = hour > 12 
        ? hour - 12 
        : hour
    
    const realTime = nonMilitaryHour === 0
        ? midnight
        : nonMilitaryHour

    const timeIndicates = [
        "AM",
        "PM"
    ];

    const timeIndicator = time.getHours() < 12
        ? timeIndicates[0] 
        : timeIndicates[1]

    return(
        <div className="mainClock">
            <div className="clockAdjust">
                <div className="time">
                    <p>
                        {realTime}:{minute < 10 ? "0" + minute: minute}
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