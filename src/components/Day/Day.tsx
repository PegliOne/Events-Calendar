import styles from "./Day.module.scss";

interface DayProps {
  date: string;
}

const Day = ({ date }: DayProps) => {
  return <section className={styles.day}>{date}</section>;
};

export default Day;
