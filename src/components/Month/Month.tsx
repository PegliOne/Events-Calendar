import * as _ from "underscore";
import Day from "../Day/Day";
import styles from "./Month.module.scss";
import { formatDate } from "../../utils/date-utils";
import MonthHeading from "../MonthHeading/MonthHeading";

interface MonthProps {
  name: string;
  year: number;
  numberOfDays: number;
  isCurrentMonth: boolean;
  updateMonthIndex: (value: number) => void;
  openModal: (value: string) => void;
}

const Month = ({
  name,
  year,
  numberOfDays,
  isCurrentMonth,
  updateMonthIndex,
  openModal,
}: MonthProps) => {
  const today = new Date();
  const currentDay = today.getDate();

  const dates = _.range(1, numberOfDays + 1);

  return (
    <>
      <MonthHeading
        name={name}
        year={year}
        updateMonthIndex={updateMonthIndex}
      />
      <section className={styles.month__dayContainer}>
        {dates.map((date) => (
          <Day
            key={date}
            date={formatDate(date)}
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
