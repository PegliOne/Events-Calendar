import Week from "../../components/Week/Week";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { splitIntoWeeks } from "../../utils/week-utils";
import {
  getMonthData,
  getCurrentMonth,
  getMonthDates,
  setMonthAndDate,
} from "../../utils/month-utils";
import { getCurrentYear } from "../../utils/year-utils";
import NavButton from "../../components/NavButton/NavButton";

const WeekDisplay = () => {
  const year = getCurrentYear();

  const { month, date } = setMonthAndDate();
  const dates = getMonthDates(month.numberOfDays);

  const weeks = splitIntoWeeks(dates);
  const weekNum = Math.floor((date - 1) / 7);

  const [weekIndex, setWeekIndex] = useState(weekNum);
  const [modalDate, setModalDate] = useState("");

  const updateWeekIndex = (value: number): void => {
    const newWeekIndex = (weekIndex + value) % weeks.length;
    setWeekIndex(newWeekIndex);
  };

  const openModal = (date: string) => {
    setModalDate(date);
  };

  const closeModal = () => {
    setModalDate("");
  };

  // Move week-heading styles to new component

  return (
    <main>
      <h2 className="week-heading">
        <NavButton
          direction="left"
          showButton={weekIndex > 0}
          updateIndex={updateWeekIndex}
        />
        <Link to={`/month-display/${month.index}`}>
          {month.name} {year} : Week {weekIndex + 1}
        </Link>
        <NavButton
          direction="right"
          showButton={weekIndex < weeks.length - 1}
          updateIndex={updateWeekIndex}
        />
      </h2>
      <h3></h3>
      <Week
        week={weeks[weekIndex]}
        monthIndex={month.index}
        openModal={openModal}
      />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={closeModal} />
      )}
    </main>
  );
};

export default WeekDisplay;
