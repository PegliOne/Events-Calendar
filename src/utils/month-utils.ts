import * as _ from "underscore";
import { useParams } from "react-router-dom";

export const getCurrentMonth = () => {
  const today = new Date();
  let index = today.getMonth();
  return getMonthData(index);
};

export const getMonthData = (index: number) => {
  const months = [
    { index: 0, name: "January", numberOfDays: 31 },
    { index: 1, name: "February", numberOfDays: 28 },
    { index: 2, name: "March", numberOfDays: 31 },
    { index: 3, name: "April", numberOfDays: 30 },
    { index: 4, name: "May", numberOfDays: 31 },
    { index: 5, name: "June", numberOfDays: 30 },
    { index: 6, name: "July", numberOfDays: 31 },
    { index: 7, name: "August", numberOfDays: 31 },
    { index: 8, name: "September", numberOfDays: 30 },
    { index: 9, name: "October", numberOfDays: 31 },
    { index: 10, name: "November", numberOfDays: 30 },
    { index: 11, name: "December", numberOfDays: 31 },
  ];

  return months[index];
};

export const getMonthDates = (numberOfDays: number) => {
  return _.range(1, numberOfDays + 1);
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
