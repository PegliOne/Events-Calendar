import * as _ from "underscore";
import { useParams } from "react-router-dom";

export const getCurrentMonth = () => {
  const today = new Date();
  const index = today.getMonth();
  const year = today.getFullYear();
  return getMonthData(index, year);
};

export const getMonthData = (index: number, year: number) => {
  const leapDate = new Date(year, 1, 29);
  const februaryDayCount = leapDate.getDate() === 29 ? 29 : 28;

  const months = [
    { index: 0, name: "January", dayCount: 31 },
    { index: 1, name: "February", dayCount: februaryDayCount },
    { index: 2, name: "March", dayCount: 31 },
    { index: 3, name: "April", dayCount: 30 },
    { index: 4, name: "May", dayCount: 31 },
    { index: 5, name: "June", dayCount: 30 },
    { index: 6, name: "July", dayCount: 31 },
    { index: 7, name: "August", dayCount: 31 },
    { index: 8, name: "September", dayCount: 30 },
    { index: 9, name: "October", dayCount: 31 },
    { index: 10, name: "November", dayCount: 30 },
    { index: 11, name: "December", dayCount: 31 },
  ];

  return months[index];
};

export const getMonthDates = (dayCount: number) => {
  return _.range(1, dayCount + 1);
};

export const setMonthAndDate = (year: number) => {
  let date = Number(useParams().date);
  let monthIndex = Number(useParams().monthIndex);

  // If either value is missing return current month and date

  if (!(String(date) && String(monthIndex))) {
    return getCurrentMonthAndDate();
  }

  // If both values are present, ensure they are valid

  const isValidMonthIndex = monthIndex >= 0 && monthIndex < 12;

  if (isValidMonthIndex) {
    const month = getMonthData(monthIndex, year);
    const isValidDate = date >= 0 && date <= month.dayCount;
    if (isValidDate) {
      return { month: month, date: date };
    } else {
      return getCurrentMonthAndDate();
    }
  }

  // Otherwise return current month and date

  return getCurrentMonthAndDate();
};

const getCurrentMonthAndDate = () => {
  const month = getCurrentMonth();
  const today = new Date();
  const date = today.getDate();
  return { month: month, date: date };
};
