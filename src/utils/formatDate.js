export const getMonthYear = (dateString) => {
  const date = new Date(dateString);

  return {
    month: date.toLocaleString("default", { month: "long" }),
    year: date.getFullYear(),
  };
};