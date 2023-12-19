import { Link } from "react-router-dom";
import Day from "../../components/Day/Day";
import { formatDate } from "../../utils/date-utils";
import { getMonthData } from "../../utils/month-utils";

const DayDisplay = () => {
  const today = new Date();
  const date = today.getDate();

  let index = today.getMonth();

  const month = getMonthData(index);

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
