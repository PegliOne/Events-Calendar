import styles from "./Week.module.scss";
import Day from "../Day/Day";
import { formatDate } from "../../utils/date-utils";

interface DayHeadingProps {
  week: number[];
  isLastWeek: boolean;
  monthIndex: number;
  openModal: (e: React.MouseEvent<Element, MouseEvent>, value: string) => void;
}

const Week = ({ week, isLastWeek, monthIndex, openModal }: DayHeadingProps) => {
  const today = new Date();
  const currentDate = today.getDate();

  const isCurrentMonth = monthIndex === today.getMonth();

  let weekStyles = styles.week;
  let weekNotesStyles = styles.week__notes;

  if (isLastWeek) {
    weekStyles += ` ${styles.week_lastWeek}`;
    weekNotesStyles += ` ${styles.week__notes_lastWeek}`;
  }

  return (
    <section className={weekStyles}>
      {week.map((date) => (
        <Day
          key={date}
          date={formatDate(date)}
          monthIndex={monthIndex}
          hasCurrentDate={date === currentDate && isCurrentMonth}
          hasBottomLeftDate={date % 7 === 4}
          showDate={true}
          openModal={(e) => openModal(e, formatDate(date))}
        />
      ))}
      <section className={weekNotesStyles}>Notes</section>
    </section>
  );
};

export default Week;
