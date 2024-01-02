import Week from "../../components/Week/Week";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { splitIntoWeeks } from "../../utils/week-utils";
import {
  getMonthData,
  getCurrentMonth,
  getMonthDates,
} from "../../utils/month-utils";
import { openModal, closeModal } from "../../utils/modal-utils";
import { getCurrentYear } from "../../utils/year-utils";

const WeekDisplay = () => {
  const currentMonth = getCurrentMonth();
  const year = getCurrentYear();

  let date = Number(useParams().date);
  let monthIndex = Number(useParams().monthIndex);

  if (!(date && monthIndex)) {
    const today = new Date();
    date = today.getDate();
    monthIndex = currentMonth.index;
  }

  const month = getMonthData(monthIndex);
  const dates = getMonthDates(month.numberOfDays);

  const weeks = splitIntoWeeks(dates);
  const weekNum = Math.floor((date - 1) / 7);
  const week = weeks[weekNum];

  const [modalDate, setModalDate] = useState("");

  return (
    <main>
      <h2>
        <Link to={`/month-display/${month.index}`}>
          {month.name} {year} : Week {weekNum + 1}
        </Link>
      </h2>
      <h3></h3>
      <Week week={week} openModal={() => openModal("11", setModalDate)} />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={() => closeModal(setModalDate)} />
      )}
    </main>
  );
};

export default WeekDisplay;
