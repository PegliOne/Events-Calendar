import * as _ from "underscore";
import Day from "../Day/Day";
import styles from "./Month.module.scss";

const Month = () => {
  const dates = _.range(1, 31);

  const formatDate = (date: number) => {
    return date < 10 ? "0" + date : String(date);
  };

  return (
    <>
      <h2 className={styles.month__heading}>November 2023</h2>
      <section className={styles.month__dayContainer}>
        {dates.map((date) => (
          <Day key={date} date={formatDate(date)} />
        ))}
      </section>
    </>
  );
};

export default Month;
