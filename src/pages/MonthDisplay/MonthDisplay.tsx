import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";
import { openModal, closeModal } from "../../utils/modal-utils";
import MonthHeading from "../../components/MonthHeading/MonthHeading";
import Month from "../../components/Month/Month";
import Modal from "../../components/Modal/Modal";
import { getCurrentYear } from "../../utils/year-utils";

const MonthDisplay = () => {
  const currentMonth = getCurrentMonth();
  const year = getCurrentYear();

  const paramsIndex = useParams().index;
  let index = Number(paramsIndex ?? currentMonth.index);

  const [monthIndex, setMonthIndex] = useState(index);
  const [modalDate, setModalDate] = useState("");

  const month = getMonthData(monthIndex);

  const updateMonthIndex = (value: number): void => {
    const newMonthIndex = (monthIndex + value) % 12;
    setMonthIndex(newMonthIndex);
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
        openModal={() => openModal("11", setModalDate)}
      />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={() => closeModal(setModalDate)} />
      )}
    </main>
  );
};

export default MonthDisplay;
