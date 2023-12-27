import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DayHeading from "../../components/DayHeading/DayHeading";
import Day from "../../components/Day/Day";
import { formatDate } from "../../utils/date-utils";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";

const DayDisplay = () => {
  const today = new Date();
  const currentMonth = getCurrentMonth();

  let date = Number(useParams().date);
  let monthIndex = Number(useParams().monthIndex);

  if (!(date && monthIndex)) {
    date = today.getDate();
    monthIndex = currentMonth.index;
  }

  const month = getMonthData(monthIndex);
  const maxDate = month.numberOfDays;

  const [displayedDate, setDisplayedDate] = useState(date);

  const updateDate = (value: number): void => {
    let newDate = (displayedDate + value) % (maxDate + 1);
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
      <Link to="/week-display">Show Full Week</Link>
      <Day key={date} monthIndex={month.index} date={formatDate(date)} />
    </main>
  );
};

export default DayDisplay;
