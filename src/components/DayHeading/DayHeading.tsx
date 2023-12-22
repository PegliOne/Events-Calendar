import styles from "./DayHeading.module.scss";
import ordinal from "ordinal";
import { Link } from "react-router-dom";

interface DayHeadingProps {
  date: number;
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
      <div className={styles.dayHeading__navButton}>
        {date > 1 && (
          <button
            className={styles.navButton__button}
            onClick={() => updateDate(-1)}
          >
            <img
              className={styles.navButton__icon}
              src="/left-caret.svg"
              alt="Left Button"
            />
          </button>
        )}
      </div>

      <Link to={`/month-display/${index}`}>
        {ordinal(date)} {monthName} 2023
      </Link>

      <div className={styles.dayHeading__navButton}>
        {date < 31 && (
          <button
            className={styles.navButton__button}
            onClick={() => updateDate(1)}
          >
            <img
              className={styles.navButton__icon}
              src="/right-caret.svg"
              alt="Right Button"
            />
          </button>
        )}
      </div>
    </h2>
  );
};

export default DayHeading;
