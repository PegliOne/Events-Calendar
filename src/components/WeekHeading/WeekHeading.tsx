import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import styles from "./WeekHeading.module.scss";

interface WeekHeadingProps {
  weekIndex: number;
  monthIndex: number;
  monthName: string;
  monthWeekCount: number;
  year: number;
  updateWeekIndex: (value: number) => void;
}

const WeekHeading = ({
  weekIndex,
  monthIndex,
  monthName,
  monthWeekCount,
  year,
  updateWeekIndex,
}: WeekHeadingProps) => {
  return (
    <h2 className={styles.weekHeading}>
      <NavButton
        direction="left"
        showButton={weekIndex > 0}
        updateIndex={updateWeekIndex}
      />
      <Link
        className={styles.weekHeading__link}
        to={`/month-display/${monthIndex}`}
      >
        {monthName} {year} : Week {weekIndex + 1}
      </Link>
      <NavButton
        direction="right"
        showButton={weekIndex < monthWeekCount - 1}
        updateIndex={updateWeekIndex}
      />
    </h2>
  );
};

export default WeekHeading;
