import styles from "./Week.module.scss";
import Day from "../Day/Day";
import { formatDate } from "../../utils/date-utils";

interface DayHeadingProps {
  week: number[];
  monthIndex: number;
  openModal: (value: string) => void;
}

const Week = ({ week, monthIndex, openModal }: DayHeadingProps) => {
  const today = new Date();
  const currentDate = today.getDate();

  const isCurrentMonth = monthIndex === today.getMonth();

  return (
    <section className={styles.week}>
      {week.map((date) => (
        <Day
          key={date}
          date={formatDate(date)}
          monthIndex={monthIndex}
          hasCurrentDate={date === currentDate && isCurrentMonth}
          isMonthDisplay={true}
          openModal={() => openModal(formatDate(date))}
        />
      ))}
      <section className={styles.week__notes}>Notes</section>
    </section>
  );
};

export default Week;
