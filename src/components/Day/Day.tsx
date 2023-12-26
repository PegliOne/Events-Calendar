import { Link } from "react-router-dom";
import styles from "./Day.module.scss";

interface DayProps {
  date: string;
  monthIndex: number;
  isHighlighted?: boolean;
  isMonthDisplay?: boolean;
  openModal?: () => void;
}

const Day = ({
  date,
  monthIndex,
  isHighlighted,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  let dayClasses = styles.day;

  if (isHighlighted) {
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
