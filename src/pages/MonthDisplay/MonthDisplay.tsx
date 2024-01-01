import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";
import MonthHeading from "../../components/MonthHeading/MonthHeading";
import Month from "../../components/Month/Month";
import Modal from "../../components/Modal/Modal";

const MonthDisplay = () => {
  const today = new Date();
  const year = today.getFullYear();
  const currentMonth = getCurrentMonth();

  const paramsIndex = useParams().index;
  let index = Number(paramsIndex ?? today.getMonth());

  const [monthIndex, setMonthIndex] = useState(index);
  const [modalDate, setModalDate] = useState("");

  const month = getMonthData(monthIndex);

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
        numberOfDays={month.numberOfDays}
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
