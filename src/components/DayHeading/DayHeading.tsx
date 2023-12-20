import styles from "./DayHeading.module.scss";
import { Link } from "react-router-dom";

interface DayHeadingProps {
  date: string;
  index: number;
  monthName: string;
  updateDate: (value: number) => void;
}

const DayHeading = ({
  date,
  index,
  monthName,
  updateDate,
}: DayHeadingProps) => {
  return (
    <h2 className={styles.dayHeading}>
      <button
        className={styles.dayHeading__navButton}
        onClick={() => updateDate(-1)}
      >
        <img
          className={styles.navButton__icon}
          src="/left-caret.svg"
          alt="Left Button"
        />
      </button>
      <Link to={`/month-display/${index}`}>
        {date}th {monthName} 2023
      </Link>
      <button
        className={styles.dayHeading__navButton}
        onClick={() => updateDate(1)}
      >
        <img
          className={styles.navButton__icon}
          src="/right-caret.svg"
          alt="Right Button"
        />
      </button>
    </h2>
  );
};

export default DayHeading;
