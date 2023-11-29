interface DayProps {
  date: string;
}

const Day = ({ date }: DayProps) => {
  return <section>{date}</section>;
};

export default Day;
