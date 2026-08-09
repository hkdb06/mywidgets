import "./calendar.css"

function Calendar() {
    const date = document.getElementById("date");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const today = new Date();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
    day.innerHTML = weekDays[today.getDay()];
    month.innerHTML = allMonths[today.getMonth()];
    year.innerHTML = today.getFullYear();
    return(
        <div class="hero">
            <div class="mainCalendar">
                <div class="dateDay">
                    <p id="date">
                        02
                    </p>
                    <p id="day">
                        Sunday
                    </p>
                </div>
                <div class="monthYear">
                    <p id="month">
                        September    
                    </p>
                    <p id="year">
                        2026
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Calendar