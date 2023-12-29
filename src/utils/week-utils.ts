export const splitIntoWeeks = (dates: number[]) => {
  const weeks = [];

  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return weeks;
};
