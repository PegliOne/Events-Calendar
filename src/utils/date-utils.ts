export const formatDate = (date: number) => {
  return date < 10 ? "0" + date : String(date);
};
