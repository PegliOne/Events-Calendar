import * as _ from "underscore";
import { useParams } from "react-router-dom";

export const getCurrentMonth = () => {
  const today = new Date();
  let index = today.getMonth();
  return getMonthData(index);
};

export const getMonthData = (index: number) => {
  const months = [
    { index: 0, name: "January", dayCount: 31 },
    { index: 1, name: "February", dayCount: 28 },
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

export const setMonthAndDate = () => {
  let date = Number(useParams().date);
  let monthIndex = Number(useParams().monthIndex);

  if (!(date && monthIndex)) {
    const today = new Date();
    date = today.getDate();
    monthIndex = getCurrentMonth().index;
  }

  const month = getMonthData(monthIndex);
  return { month: month, date: date };
};
