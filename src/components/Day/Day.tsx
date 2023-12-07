import styles from "./Day.module.scss";

interface DayProps {
  date: string;
  openModal: () => void;
}

const Day = ({ date, openModal }: DayProps) => {
  return (
    <section className={styles.day} onClick={openModal}>
      {date}
    </section>
  );
};

export default Day;
