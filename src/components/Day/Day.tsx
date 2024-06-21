import styles from "./Day.module.scss";
import EventCard from "../EventCard/EventCard";

interface EventProps {
  eventName: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  url?: string;
  label?: string;
}
interface DayProps {
  date?: string;
  monthIndex: number;
  event?: EventProps;
  showDate?: boolean;
  hasCurrentDate?: boolean;
  hasBottomLeftDate?: boolean;
  isMonthDisplay?: boolean;
  openModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
  openEventDetailsModal: (
    e: React.MouseEvent<Element, MouseEvent>,
    event: EventProps
  ) => void;
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
  openEventDetailsModal,
}: DayProps) => {
  let dayClasses = styles.day;

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

  return (
    <section
      id={`day-${date}`}
      className={dayClasses}
      onClick={(e) => openModal(e)}
    >
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
                event={event}
                openModal={openModal}
                openEventDetailsModal={openEventDetailsModal}
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
