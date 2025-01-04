export const formatNumberWithCommas = (number: number) => {
  // Add commas to prices >= 1000
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
