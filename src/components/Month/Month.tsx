import * as _ from "underscore";
import Day from "../Day/Day";
import styles from "./Month.module.scss";

interface MonthProps {
  name: string;
  year: number;
  numberOfDays: number;
}

const Month = ({ name, year, numberOfDays }: MonthProps) => {
  const dates = _.range(1, numberOfDays + 1);

  const formatDate = (date: number) => {
    return date < 10 ? "0" + date : String(date);
  };

  return (
    <>
      <h2 className={styles.month__heading}>
        <a className={styles.month__navLink}>
          <img
            className={styles.month__navButton}
            src="left-caret.svg"
            alt="Left Button"
          />
        </a>
        {name} {year}
        <a className={styles.month__navLink}>
          <img
            className={styles.month__navButton}
            src="right-caret.svg"
            alt="Right Button"
          />
        </a>
      </h2>
      <section className={styles.month__dayContainer}>
        {dates.map((date) => (
          <Day key={date} date={formatDate(date)} />
        ))}
      </section>
    </>
  );
};

export default Month;
