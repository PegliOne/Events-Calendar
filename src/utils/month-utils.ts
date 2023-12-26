export const getCurrentMonth = () => {
  const today = new Date();
  let index = today.getMonth();
  return getMonthData(index);
};

export const getMonthData = (index: number) => {
  const months = [
    { index: 1, name: "January", numberOfDays: 31 },
    { index: 2, name: "February", numberOfDays: 28 },
    { index: 3, name: "March", numberOfDays: 31 },
    { index: 4, name: "April", numberOfDays: 30 },
    { index: 5, name: "May", numberOfDays: 31 },
    { index: 6, name: "June", numberOfDays: 30 },
    { index: 7, name: "July", numberOfDays: 31 },
    { index: 8, name: "August", numberOfDays: 31 },
    { index: 9, name: "September", numberOfDays: 30 },
    { index: 10, name: "October", numberOfDays: 31 },
    { index: 11, name: "November", numberOfDays: 30 },
    { index: 12, name: "December", numberOfDays: 31 },
  ];

  return months[index];
};
