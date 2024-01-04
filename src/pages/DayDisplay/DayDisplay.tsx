import { useState } from "react";
import { Link } from "react-router-dom";
import DayHeading from "../../components/DayHeading/DayHeading";
import Day from "../../components/Day/Day";
import { setMonthAndDate } from "../../utils/month-utils";
import { getCurrentYear } from "../../utils/year-utils";

const DayDisplay = () => {
  const today = new Date();
  const currentDate = today.getDate();
  const year = getCurrentYear();

  const { month, date } = setMonthAndDate();

  const [displayedDate, setDisplayedDate] = useState(date);

  const updateDate = (value: number): void => {
    let newDate = (displayedDate + value) % (month.numberOfDays + 1);
    setDisplayedDate(newDate);
  };

  const isCurrentMonth = month.index === today.getMonth();

  return (
    <main>
      <DayHeading
        date={displayedDate}
        monthIndex={month.index}
        monthName={month.name}
        numberOfDays={month.numberOfDays}
        year={year}
        updateDate={updateDate}
      />
      <Link to={`/week-display/${month.index}/${displayedDate}`}>
        Show Full Week
      </Link>
      <Day
        key={displayedDate}
        monthIndex={month.index}
        hasCurrentDate={displayedDate === currentDate && isCurrentMonth}
      />
    </main>
  );
};

export default DayDisplay;
