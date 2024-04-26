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

interface EventProps {
  startTime: Date;
}

const Month = ({ index, dayCount, isCurrentMonth, openModal }: MonthProps) => {
  const today = new Date();
  const currentDate = today.getDate();

  const dates = getMonthDates(dayCount);

  const getEvent = (date: Number) => {
    const storedEvents = JSON.parse(localStorage.getItem("events") ?? "");
    const event = storedEvents.filter((event: EventProps) => {
      const eventDate = new Date(event.startTime);
      return eventDate.getMonth() === index && eventDate.getDate() === date;
    })[0];
    if (event) {
      event.startTime = new Date(event.startTime);
    }
    return event;
  };

  return (
    <>
      <section className={styles.month}>
        {dates.map((date) => (
          <Day
            key={date}
            date={formatDate(date)}
            monthIndex={index}
            event={getEvent(date)}
            hasCurrentDate={date === currentDate && isCurrentMonth}
            hasBottomLeftDate={date === 29}
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
