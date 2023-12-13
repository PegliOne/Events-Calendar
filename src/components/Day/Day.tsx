import styles from "./Day.module.scss";

interface DayProps {
  date: string;
  isHighlighted: boolean;
  openModal?: () => void;
}

const Day = ({ date, isHighlighted, openModal }: DayProps) => {
  let dayClasses = styles.day;

  if (isHighlighted) {
    dayClasses += ` ${styles.day_current}`;
  }

  return (
    <section className={dayClasses} onClick={openModal}>
      {date}
    </section>
  );
};

export default Day;
