import styles from "./MonthHeading.module.scss";

interface MonthHeadingProps {
  name: string;
  year: number;
  updateMonthIndex: (value: number) => void;
}

const MonthHeading = ({ name, year, updateMonthIndex }: MonthHeadingProps) => {
  return (
    <h2 className={styles.month__heading}>
      <div className={styles.month__buttonContainer}>
        {name !== "January" && (
          <button
            className={styles.month__navButton}
            onClick={() => updateMonthIndex(-1)}
          >
            <img
              className={styles.navButton__icon}
              src="/left-caret.svg"
              alt="Left Button"
            />
          </button>
        )}
      </div>
      {name} {year}
      <div className={styles.month__buttonContainer}>
        {name !== "December" && (
          <button
            className={styles.month__navButton}
            onClick={() => updateMonthIndex(1)}
          >
            <img
              className={styles.navButton__icon}
              src="/right-caret.svg"
              alt="Right Button"
            />
          </button>
        )}
      </div>
    </h2>
  );
};

export default MonthHeading;
