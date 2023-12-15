import { Link } from "react-router-dom";
import Day from "../../components/Day/Day";
import { formatDate } from "../../utils/date-utils";

const DayDisplay = () => {
  const today = new Date();
  const date = today.getDate();

  let index = today.getMonth();

  const months = [
    { name: "January", numberOfDays: 31 },
    { name: "February", numberOfDays: 28 },
    { name: "March", numberOfDays: 31 },
    { name: "April", numberOfDays: 30 },
    { name: "May", numberOfDays: 31 },
    { name: "June", numberOfDays: 30 },
    { name: "July", numberOfDays: 31 },
    { name: "August", numberOfDays: 31 },
    { name: "September", numberOfDays: 30 },
    { name: "October", numberOfDays: 31 },
    { name: "November", numberOfDays: 30 },
    { name: "December", numberOfDays: 31 },
  ];

  const month = months[index];

  return (
    <main>
      <h2>
        <Link to={`/month-display/${index}`}>{month.name} 2023</Link>
      </h2>
      <Link to="/week-display">Show Full Week</Link>
      <Day key={date} date={formatDate(date)} />
    </main>
  );
};

export default DayDisplay;
