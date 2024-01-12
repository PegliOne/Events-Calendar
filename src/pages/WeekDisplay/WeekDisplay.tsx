import Week from "../../components/Week/Week";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { splitIntoWeeks } from "../../utils/week-utils";
import { getMonthDates, setMonthAndDate } from "../../utils/month-utils";
import { getCurrentYear } from "../../utils/year-utils";
import WeekHeading from "../../components/WeekHeading/WeekHeading";

const WeekDisplay = () => {
  const year = getCurrentYear();

  const { month, date } = setMonthAndDate(year);
  const dates = getMonthDates(month.dayCount);

  const weeks = splitIntoWeeks(dates);
  const currentWeekIndex = Math.floor((date - 1) / 7);

  const [weekIndex, setWeekIndex] = useState(currentWeekIndex);
  const [modalDate, setModalDate] = useState("");

  const updateWeekIndex = (value: number): void => {
    const newWeekIndex = (weekIndex + value) % weeks.length;
    setWeekIndex(newWeekIndex);
  };

  const openModal = (date: string) => {
    setModalDate(date);
  };

  const closeModal = () => {
    setModalDate("");
  };

  return (
    <main>
      <WeekHeading
        weekIndex={weekIndex}
        monthIndex={month.index}
        monthName={month.name}
        monthWeekCount={weeks.length}
        year={year}
        updateWeekIndex={updateWeekIndex}
      />
      <h3></h3>
      <Week
        week={weeks[weekIndex]}
        isLastWeek={weekIndex >= weeks.length - 1}
        monthIndex={month.index}
        openModal={openModal}
      />
      {modalDate.length !== 0 && (
        <Modal date={modalDate} closeModal={closeModal} />
      )}
    </main>
  );
};

export default WeekDisplay;
