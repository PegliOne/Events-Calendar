import * as _ from "underscore";
import Day from "../components/Day";

const Month = () => {
  const dates = _.range(1, 31);

  const formatDate = (date: number) => {
    return date < 10 ? "0" + date : String(date);
  };

  return (
    <>
      <h2>November 2023</h2>
      {dates.map((date) => (
        <Day date={formatDate(date)} />
      ))}
    </>
  );
};

export default Month;
