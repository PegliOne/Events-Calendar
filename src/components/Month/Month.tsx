import Day from "../Day/Day";
import styles from "./Month.module.scss";
import { formatDate } from "../../utils/date-utils";
import { getMonthDates } from "../../utils/month-utils";

interface MonthProps {
  index: number;
  dayCount: number;
  isCurrentMonth: boolean;
  openModal: (value: string) => void;
}

const Month = ({ index, dayCount, isCurrentMonth, openModal }: MonthProps) => {
  const today = new Date();
  const currentDate = today.getDate();

  const dates = getMonthDates(dayCount);

  return (
    <>
      <section className={styles.month}>
        {dates.map((date) => (
          <Day
            key={date}
            date={formatDate(date)}
            monthIndex={index}
            hasCurrentDate={date === currentDate && isCurrentMonth}
            showDate={true}
            isMonthDisplay={true}
            openModal={() => openModal(formatDate(date))}
          />
        ))}
        <section className={styles.month__notes}>Notes</section>
      </section>
    </>
  );
};

export default Month;
