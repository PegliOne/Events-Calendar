import { useState } from "react";
import { Link } from "react-router-dom";
import DayHeading from "../../components/DayHeading/DayHeading";
import Day from "../../components/Day/Day";
import { setMonthAndDate } from "../../utils/month-utils";

const DayDisplay = () => {
  const today = new Date();
  const currentDate = today.getDate();

  const { month, date } = setMonthAndDate();

  const [displayedDate, setDisplayedDate] = useState(date);

  const updateDate = (value: number): void => {
    let newDate = (displayedDate + value) % (month.numberOfDays + 1);
    setDisplayedDate(newDate);
  };

  return (
    <main>
      <DayHeading
        date={displayedDate}
        monthIndex={month.index}
        monthName={month.name}
        numberOfDays={month.numberOfDays}
        updateDate={updateDate}
      />
      <Link to={`/week-display/${month.index}/${displayedDate}`}>
        Show Full Week
      </Link>
      <Day
        key={displayedDate}
        monthIndex={month.index}
        hasCurrentDate={displayedDate === currentDate}
      />
    </main>
  );
};

export default DayDisplay;
