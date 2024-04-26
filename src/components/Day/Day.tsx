import styles from "./Day.module.scss";
import EventCard from "../EventCard/EventCard";

interface EventProps {
  eventName: string;
  startTime: Date;
}
interface DayProps {
  date?: string;
  monthIndex: number;
  event?: EventProps;
  showDate?: boolean;
  hasCurrentDate?: boolean;
  hasBottomLeftDate?: boolean;
  isMonthDisplay?: boolean;
  openModal: () => void;
}

const Day = ({
  date,
  monthIndex,
  event,
  showDate,
  hasCurrentDate,
  hasBottomLeftDate,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  let dayClasses = styles.day;
  console.log(event);

  if (hasCurrentDate) {
    dayClasses += ` ${styles.day_current}`;
  }

  if (hasBottomLeftDate) {
    dayClasses += ` ${styles.day_bottomLeft}`;
  }

  let isWeekStartDate = false;

  if (date) {
    isWeekStartDate = Number(date) % 7 === 1;
  }

  const handleLinkClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    link: string
  ) => {
    e.stopPropagation();
    window.location.pathname = link;
  };

  const formatStartTime = (startTime: Date) => {
    return startTime
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
      .replace(" ", "")
      .toLowerCase();
  };

  return (
    <section className={dayClasses} onClick={openModal}>
      {showDate && (
        <>
          <a
            className={styles.day__date}
            onClick={(e) =>
              handleLinkClick(e, `/day-display/${monthIndex}/${date}`)
            }
          >
            {date}
          </a>
          <div className={styles.day__cardContainer}>
            {event && (
              <EventCard
                name={event.eventName}
                time={formatStartTime(event.startTime)}
              />
            )}
          </div>
          <div>
            {isMonthDisplay && isWeekStartDate && (
              <a
                className={styles.day__weekLink}
                onClick={(e) =>
                  handleLinkClick(e, `/week-display/${monthIndex}/${date}`)
                }
              >
                Show Week
              </a>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Day;
