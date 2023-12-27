import Week from "../../components/Week/Week";
import { Link } from "react-router-dom";
import { getCurrentMonth } from "../../utils/month-utils";

const WeekDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();

  const month = getCurrentMonth();

  const date = today.getDate();

  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31],
  ];

  const weekNum = Math.floor(date / 7);
  const week = weeks[weekNum];

  return (
    <main>
      <h2>
        <Link to={`/month-display/${month.index}`}>
          {month.name} {year} : Week {weekNum}
        </Link>
      </h2>
      <h3></h3>
      <Week week={week} />
    </main>
  );
};

export default WeekDisplay;
