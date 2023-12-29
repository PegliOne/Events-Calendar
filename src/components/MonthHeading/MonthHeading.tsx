import NavButton from "../NavButton/NavButton";
import styles from "./MonthHeading.module.scss";

interface MonthHeadingProps {
  name: string;
  year: number;
  updateMonthIndex: (value: number) => void;
}

const MonthHeading = ({ name, year, updateMonthIndex }: MonthHeadingProps) => {
  return (
    <h2 className={styles.monthHeading}>
      <NavButton
        direction="left"
        showButton={name !== "January"}
        updateIndex={() => updateMonthIndex(-1)}
      />
      {name} {year}
      <NavButton
        direction="right"
        showButton={name !== "December"}
        updateIndex={() => updateMonthIndex(1)}
      />
    </h2>
  );
};

export default MonthHeading;
