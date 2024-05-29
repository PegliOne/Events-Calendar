import { useState } from "react";
import { Link } from "react-router-dom";
import DayHeading from "../../components/DayHeading/DayHeading";
import Day from "../../components/Day/Day";
import Modal from "../../components/Modal/Modal";
import { setMonthAndDate } from "../../utils/month-utils";
import { getCurrentYear } from "../../utils/year-utils";

interface DayDisplayProps {
  showModal: boolean;
  openModal: (event: React.MouseEvent<Element, MouseEvent>) => void;
  closeModal: () => void;
}

const DayDisplay = ({ showModal, openModal, closeModal }: DayDisplayProps) => {
  const today = new Date();
  const currentDate = today.getDate();
  const year = getCurrentYear();

  const { month, date } = setMonthAndDate(year);

  const [displayedDate, setDisplayedDate] = useState(date);

  const updateDate = (value: number): void => {
    let newDate = (displayedDate + value) % (month.dayCount + 1);
    setDisplayedDate(newDate);
  };

  const isCurrentMonth = month.index === today.getMonth();

  return (
    <main>
      <DayHeading
        date={displayedDate}
        monthIndex={month.index}
        monthName={month.name}
        monthDayCount={month.dayCount}
        year={year}
        updateDate={updateDate}
      />
      <Link to={`/week-display/${month.index}/${displayedDate}`}>
        Show Full Week
      </Link>
      <Day
        key={displayedDate}
        monthIndex={month.index}
        hasCurrentDate={displayedDate === currentDate && isCurrentMonth}
        openModal={openModal}
      />
      {showModal && <Modal content="eventForm" closeModal={closeModal} />}
    </main>
  );
};

export default DayDisplay;
