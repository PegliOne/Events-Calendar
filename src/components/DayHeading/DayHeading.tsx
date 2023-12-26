import styles from "./DayHeading.module.scss";
import ordinal from "ordinal";
import NavButton from "../NavButton/NavButton";
import { Link } from "react-router-dom";

interface DayHeadingProps {
  date: number;
  index: number;
  monthName: string;
  updateDate: (value: number) => void;
}

const DayHeading = ({
  date,
  index,
  monthName,
  updateDate,
}: DayHeadingProps) => {
  return (
    <h2 className={styles.dayHeading}>
      <NavButton
        direction="left"
        showButton={date > 1}
        updateIndex={() => updateDate(-1)}
      />
      <Link to={`/month-display/${index}`}>
        {ordinal(date)} {monthName} 2023
      </Link>
      <NavButton
        direction="right"
        showButton={date < 31}
        updateIndex={() => updateDate(1)}
      />
    </h2>
  );
};

export default DayHeading;
