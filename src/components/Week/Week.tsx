import styles from "./Week.module.scss";
import Day from "../Day/Day";
import { formatDate } from "../../utils/date-utils";

const Week = () => {
  const today = new Date();
  const currentDate = today.getDate();

  const isCurrentMonth = true;

  return (
    <section className={styles.week}>
      {[22, 23, 24, 25, 26, 27, 28].map((date) => (
        <Day
          key={date}
          date={formatDate(date)}
          monthIndex={11}
          isHighlighted={date === currentDate && isCurrentMonth}
          isMonthDisplay={true}
        />
      ))}
      <section className={styles.week__notes}>Notes</section>
    </section>
  );
};

export default Week;
