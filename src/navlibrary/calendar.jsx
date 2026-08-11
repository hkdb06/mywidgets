import "./calendar.css"

function Calendar() {
    const today = new Date();
    console.log(today);

    const weekDays = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thurday", 
        "Friday", 
        "Saturday"
    ];
    const allMonths = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    return(
        <div className="hero">
            <div className="mainCalendar">
                <div className="dateDay">
                    <p id="date">
                        {today.getDate() < 10 ? "0" : ""}
                        {today.getDate()}
                    </p>
                    <p id="day">
                        {weekDays[today.getDay()]}
                    </p>
                </div>
                <div className="monthYear">
                    <p id="month">
                        {allMonths[today.getMonth()]}    
                    </p>
                    <p id="year">
                        {today.getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Calendar