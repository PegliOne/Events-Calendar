import { Link } from "react-router-dom";
import styles from "./Day.module.scss";

interface DayProps {
  date?: string;
  monthIndex: number;
  showDate?: boolean;
  hasCurrentDate?: boolean;
  isMonthDisplay?: boolean;
  openModal?: () => void;
}

const Day = ({
  date,
  monthIndex,
  showDate,
  hasCurrentDate,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  let dayClasses = styles.day;

  if (hasCurrentDate) {
    dayClasses += ` ${styles.day_current}`;
  }

  const isWeekStartDate = date % 7 === 1;

  return (
    <section className={dayClasses} onClick={openModal}>
      {showDate && (
        <>
          <Link
            className={styles.day__date}
            to={`/day-display/${monthIndex}/${date}`}
          >
            {date}
          </Link>
          {isMonthDisplay && isWeekStartDate && (
            <Link
              className={styles.day__weekLink}
              to={`/week-display/${monthIndex}/${date}`}
            >
              Show Week
            </Link>
          )}
        </>
      )}
    </section>
  );
};

export default Day;
