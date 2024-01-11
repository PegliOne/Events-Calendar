import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";
import MonthHeading from "../../components/MonthHeading/MonthHeading";
import Month from "../../components/Month/Month";
import Modal from "../../components/Modal/Modal";
import { getCurrentYear } from "../../utils/year-utils";

const MonthDisplay = () => {
  const currentMonth = getCurrentMonth();
  const year = getCurrentYear();

  let paramsIndex = useParams().index;

  let index = Number(paramsIndex ?? currentMonth.index);

  // Set index to current month index if it is invalid

  if (index < 0 || index > 11) {
    index = currentMonth.index;
  }

  const [monthIndex, setMonthIndex] = useState(index);
  const [modalDate, setModalDate] = useState("");

  const month = getMonthData(monthIndex, year);

  const updateMonthIndex = (value: number): void => {
    const newMonthIndex = (monthIndex + value) % 12;
    setMonthIndex(newMonthIndex);
  };

  const openModal = (date: string) => {
    setModalDate(date);
  };

  const closeModal = () => {
    setModalDate("");
  };

  return (
    <main>
      <MonthHeading
        name={month.name}
        year={year}
        updateMonthIndex={updateMonthIndex}
      />
      <Month
        index={month.index}
        dayCount={month.dayCount}
        isCurrentMonth={monthIndex === currentMonth.index}
        openModal={openModal}
      />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={closeModal} />
      )}
    </main>
  );
};

export default MonthDisplay;
