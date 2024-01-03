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

const WeekDisplay = () => {
  const year = getCurrentYear();

  const { month, date } = setMonthAndDate();
  const dates = getMonthDates(month.numberOfDays);

  const weeks = splitIntoWeeks(dates);
  const weekNum = Math.floor((date - 1) / 7);
  const week = weeks[weekNum];

  const [modalDate, setModalDate] = useState("");

  const openModal = (date: string) => {
    setModalDate(date);
  };

  const closeModal = () => {
    setModalDate("");
  };

  return (
    <main>
      <h2>
        <Link to={`/month-display/${month.index}`}>
          {month.name} {year} : Week {weekNum + 1}
        </Link>
      </h2>
      <h3></h3>
      <Week week={week} monthIndex={month.index} openModal={openModal} />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={closeModal} />
      )}
    </main>
  );
};

export default WeekDisplay;
