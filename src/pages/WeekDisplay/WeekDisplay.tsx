import Week from "../../components/Week/Week";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentMonth } from "../../utils/month-utils";

const WeekDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();

  const month = getCurrentMonth();

  const date = today.getDate();

  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31],
  ];

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
          {month.name} {year} : Week {weekNum}
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
