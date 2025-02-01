export const formatNumberWithCommas = (number: number) => {
  // Add commas to prices >= 1000
  const [integerPart, decimalPart] = number.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (decimalPart !== undefined) {
    return `${formattedInteger}.${decimalPart.padEnd(2, "0")}`;
  }
  return formattedInteger;
};
