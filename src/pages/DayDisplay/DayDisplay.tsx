import { Link } from "react-router-dom";
import Day from "../../components/Day/Day";
import { formatDate } from "../../utils/date-utils";

const DayDisplay = () => {
  const today = new Date();
  const date = today.getDate();

  // Make openModal function option

  return (
    <main>
      <h2>December 2023</h2>
      <Link to="/week-display">Show Full Week</Link>
      <Day key={date} date={formatDate(date)} />
    </main>
  );
};

export default DayDisplay;
