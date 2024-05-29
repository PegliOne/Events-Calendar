import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";
import MonthHeading from "../../components/MonthHeading/MonthHeading";
import Month from "../../components/Month/Month";
import Modal from "../../components/Modal/Modal";
import { getCurrentYear } from "../../utils/year-utils";

interface MonthDisplayProps {
  showModal: boolean;
  modalContent: string;
  openModal: (event: React.MouseEvent<Element, MouseEvent>) => void;
  closeModal: () => void;
}

const MonthDisplay = ({
  showModal,
  modalContent,
  openModal,
  closeModal,
}: MonthDisplayProps) => {
  const currentMonth = getCurrentMonth();
  const year = getCurrentYear();

  let paramsIndex = useParams().index;

  let index = Number(paramsIndex ?? currentMonth.index);

  // Set index to current month index if it is invalid

  if (index < 0 || index > 11) {
    index = currentMonth.index;
  }

  const [monthIndex, setMonthIndex] = useState(index);

  const month = getMonthData(monthIndex, year);

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
        dayCount={month.dayCount}
        isCurrentMonth={monthIndex === currentMonth.index}
        openModal={openModal}
      />
      {showModal && <Modal content={modalContent} closeModal={closeModal} />}
    </main>
  );
};

export default MonthDisplay;
