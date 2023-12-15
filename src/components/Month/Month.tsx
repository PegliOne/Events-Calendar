import * as _ from "underscore";
import Day from "../Day/Day";
import styles from "./Month.module.scss";
import { formatDate } from "../../utils/date-utils";

interface MonthProps {
  name: string;
  year: number;
  numberOfDays: number;
  updateMonthIndex: (value: number) => void;
  openModal: (value: string) => void;
}

const Month = ({
  name,
  year,
  numberOfDays,
  updateMonthIndex,
  openModal,
}: MonthProps) => {
  const today = new Date();
  const currentDay = today.getDate();

  const dates = _.range(1, numberOfDays + 1);

  return (
    <>
      <h2 className={styles.month__heading}>
        <div className={styles.month__buttonContainer}>
          {name !== "January" && (
            <button
              className={styles.month__navButton}
              onClick={() => updateMonthIndex(-1)}
            >
              <img
                className={styles.navButton__icon}
                src="/left-caret.svg"
                alt="Left Button"
              />
            </button>
          )}
        </div>
        {name} {year}
        <div className={styles.month__buttonContainer}>
          {name !== "December" && (
            <button
              className={styles.month__navButton}
              onClick={() => updateMonthIndex(1)}
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
      <section className={styles.month__dayContainer}>
        {dates.map((date) => (
          <Day
            key={date}
            date={formatDate(date)}
            isHighlighted={date === currentDay}
            openModal={() => openModal(formatDate(date))}
          />
        ))}
        <section className={styles.month__notes}>Notes</section>
      </section>
    </>
  );
};

export default Month;
