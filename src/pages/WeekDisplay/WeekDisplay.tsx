import * as _ from "underscore";
import Week from "../../components/Week/Week";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { splitIntoWeeks } from "../../utils/week-utils";
import { getMonthData, getCurrentMonth } from "../../utils/month-utils";

const WeekDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();

  const currentMonth = getCurrentMonth();

  let date = Number(useParams().date);
  let monthIndex = Number(useParams().monthIndex);

  if (!(date && monthIndex)) {
    date = today.getDate();
    monthIndex = currentMonth.index;
  }

  const month = getMonthData(monthIndex);

  const dates = _.range(1, month.numberOfDays + 1);

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
      <Week week={week} openModal={openModal} />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={closeModal} />
      )}
    </main>
  );
};

export default WeekDisplay;
