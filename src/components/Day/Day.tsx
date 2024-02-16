import styles from "./Day.module.scss";
import EventCard from "../EventCard/EventCard";

interface DayProps {
  date?: string;
  monthIndex: number;
  showDate?: boolean;
  hasCurrentDate?: boolean;
  hasBottomLeftDate?: boolean;
  isMonthDisplay?: boolean;
  openModal: () => void;
}

const Day = ({
  date,
  monthIndex,
  showDate,
  hasCurrentDate,
  hasBottomLeftDate,
  isMonthDisplay,
  openModal,
}: DayProps) => {
  const eventDate = "14";

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
          {date === eventDate && (
            <EventCard name="Mock Event Name" time="2:00pm" />
          )}
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
        </>
      )}
    </section>
  );
};

export default Day;
