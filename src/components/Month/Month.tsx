import Day from "../Day/Day";
import styles from "./Month.module.scss";
import { formatDate } from "../../utils/date-utils";
import { getMonthDates } from "../../utils/month-utils";

interface MonthProps {
  index: number;
  dayCount: number;
  isCurrentMonth: boolean;
  openModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
  openEventDetailsModal: (
    e: React.MouseEvent<Element, MouseEvent>,
    event: EventProps
  ) => void;
}

interface EventProps {
  eventName: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  url?: string;
  label?: string;
}

interface EventDetailsProps {
  eventName: string;
  startTime: string;
  endTime: string;
  location?: string;
  url?: string;
  label?: string;
}

const Month = ({
  index,
  dayCount,
  isCurrentMonth,
  openModal,
  openEventDetailsModal,
}: MonthProps) => {
  const today = new Date();
  const currentDate = today.getDate();

  const dates = getMonthDates(dayCount);

  const getEvent = (date: Number) => {
    const storedEvents = JSON.parse(localStorage.getItem("events") ?? "");
    const eventDetails = storedEvents.filter(
      (eventDetails: EventDetailsProps) => {
        const eventDate = new Date(eventDetails.startTime);
        return eventDate.getMonth() === index && eventDate.getDate() === date;
      }
    )[0];
    if (eventDetails) {
      eventDetails.startTime = new Date(eventDetails.startTime);
      eventDetails.endTime = new Date(eventDetails.endTime);
    }
    return eventDetails;
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
            openModal={(e) => openModal(e)}
            openEventDetailsModal={openEventDetailsModal}
          />
        ))}
        <section className={styles.month__notes}>Notes</section>
      </section>
    </>
  );
};

export default Month;
