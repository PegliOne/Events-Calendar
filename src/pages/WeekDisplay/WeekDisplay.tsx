import Week from "../../components/Week/Week";
import { getMonthData } from "../../utils/month-utils";

const WeekDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();

  let index = today.getMonth();
  const month = getMonthData(index);

  return (
    <main>
      <h2>
        {month.name} {year} : Week 4
      </h2>
      <h3></h3>
      <Week />
    </main>
  );
};

export default WeekDisplay;
