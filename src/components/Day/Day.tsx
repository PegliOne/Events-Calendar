import styles from "./Day.module.scss";

interface DayProps {
  date: string;
  isHighlighted?: boolean;
  isMonthDisplay?: boolean;
  openModal?: () => void;
}

const Day = ({ date, isHighlighted, isMonthDisplay, openModal }: DayProps) => {
  let dayClasses = styles.day;

  if (isHighlighted) {
    dayClasses += ` ${styles.day_current}`;
  }

  return (
    <section className={dayClasses} onClick={openModal}>
      {isMonthDisplay && date}
    </section>
  );
};

export default Day;
