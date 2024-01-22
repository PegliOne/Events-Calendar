import { Link } from "react-router-dom";
import styles from "./Day.module.scss";

interface DayProps {
  date?: string;
  monthIndex: number;
  showDate?: boolean;
  hasCurrentDate?: boolean;
  hasBottomLeftDate: boolean;
  isMonthDisplay?: boolean;
  openModal?: () => void;
}

const Day = ({
  date,
  monthIndex,
  showDate,
  hasCurrentDate,
  hasBottomLeftDate,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  let dayClasses = styles.day;

  if (hasCurrentDate) {
    dayClasses += ` ${styles.day_current}`;
  }

  if (hasBottomLeftDate) {
    dayClasses += ` ${styles.day_bottomLeft}`;
  }

  let isWeekStartDate = false;

  if (date) {
    isWeekStartDate = Number(date) % 7 === 1;
  }

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
