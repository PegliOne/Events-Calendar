import { Link } from "react-router-dom";
import styles from "./Day.module.scss";

interface DayProps {
  date?: string;
  monthIndex: number;
  hasCurrentDate?: boolean;
  isMonthDisplay?: boolean;
  openModal?: () => void;
}

const Day = ({
  date,
  monthIndex,
  hasCurrentDate,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  let dayClasses = styles.day;

  if (hasCurrentDate) {
    dayClasses += ` ${styles.day_current}`;
  }

  return (
    <section className={dayClasses} onClick={openModal}>
      {isMonthDisplay && (
        <Link
          className={styles.day__date}
          to={`/day-display/${monthIndex}/${date}`}
        >
          {date}
        </Link>
      )}
    </section>
  );
};

export default Day;
