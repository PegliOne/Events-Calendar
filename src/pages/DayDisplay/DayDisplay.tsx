import { useState } from "react";
import { Link } from "react-router-dom";
import DayHeading from "../../components/DayHeading/DayHeading";
import Day from "../../components/Day/Day";
import { formatDate } from "../../utils/date-utils";
import { getCurrentMonth } from "../../utils/month-utils";

const DayDisplay = () => {
  const today = new Date();
  const index = today.getDate();
  const month = getCurrentMonth();

  const [date, setDate] = useState(today.getDate());

  const updateDate = (value: number): void => {
    let newDate = (date + value) % 32;
    setDate(newDate);
  };

  return (
    <main>
      <DayHeading
        date={date}
        index={index}
        monthName={month.name}
        updateDate={updateDate}
      />
      <Link to="/week-display">Show Full Week</Link>
      <Day key={date} date={formatDate(date)} />
    </main>
  );
};

export default DayDisplay;
