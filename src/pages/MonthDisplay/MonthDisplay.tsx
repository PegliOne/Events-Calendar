import Month from "../../components/Month/Month";

const months = [
  { name: "January", numberOfDays: 31 },
  { name: "February", numberOfDays: 28 },
  { name: "March", numberOfDays: 31 },
  { name: "April", numberOfDays: 30 },
  { name: "May", numberOfDays: 31 },
  { name: "June", numberOfDays: 30 },
  { name: "July", numberOfDays: 31 },
  { name: "August", numberOfDays: 31 },
  { name: "September", numberOfDays: 30 },
  { name: "October", numberOfDays: 31 },
  { name: "November", numberOfDays: 30 },
  { name: "December", numberOfDays: 31 },
];

const date = new Date();
const month = months[date.getMonth()];
const year = date.getFullYear();

const MonthDisplay = () => {
  return (
    <main>
      <Month name={month.name} year={year} numberOfDays={month.numberOfDays} />
    </main>
  );
};

export default MonthDisplay;
