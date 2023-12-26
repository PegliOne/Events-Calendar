import Week from "../../components/Week/Week";
import { Link } from "react-router-dom";
import { getCurrentMonth } from "../../utils/month-utils";

const WeekDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();

  const month = getCurrentMonth();

  return (
    <main>
      <h2>
        <Link to={`/month-display/${month.index}`}>
          {month.name} {year} : Week 4
        </Link>
      </h2>
      <h3></h3>
      <Week />
    </main>
  );
};

export default WeekDisplay;
