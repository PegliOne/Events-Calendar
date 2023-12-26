import * as _ from "underscore";
import Day from "../Day/Day";
import styles from "./Month.module.scss";
import { formatDate } from "../../utils/date-utils";

interface MonthProps {
  index: number;
  numberOfDays: number;
  isCurrentMonth: boolean;
  openModal: (value: string) => void;
}

const Month = ({
  index,
  numberOfDays,
  isCurrentMonth,
  openModal,
}: MonthProps) => {
  const today = new Date();
  const currentDay = today.getDate();

  const dates = _.range(1, numberOfDays + 1);

  return (
    <>
      <section className={styles.month}>
        {dates.map((date) => (
          <Day
            key={date}
            date={formatDate(date)}
            monthIndex={index}
            isHighlighted={date === currentDay && isCurrentMonth}
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
