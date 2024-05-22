import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentMonth, getMonthData } from "../../utils/month-utils";
import MonthHeading from "../../components/MonthHeading/MonthHeading";
import Month from "../../components/Month/Month";
import Modal from "../../components/Modal/Modal";
import { getCurrentYear } from "../../utils/year-utils";
import EventCardModal from "../../components/EventCardModal/EventCardModal";

interface MonthDisplayProps {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const MonthDisplay = ({
  showModal,
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
      {showModal && <Modal closeModal={closeModal} />}
      <EventCardModal
        eventName={"Mock Event"}
        startTime={"May 14th: 2:00pm"}
        endTime={"May 14th: 4:00pm"}
        location={"online"}
        url="https://www.url.com"
        label={"Social"}
        closeModal={closeModal}
      />
    </main>
  );
};

export default MonthDisplay;
