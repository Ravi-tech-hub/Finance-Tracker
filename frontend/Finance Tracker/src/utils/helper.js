export const validateEmail = ({ email }) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export const addThousandsSeprator = (num) => {
  if (num == null || isNaN(num)) return "";
  const [integerPart, fractionPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fractionPart
    ? `${formattedInteger}.${fractionPart}`
    : formattedInteger;
};

export const prepareExpenseBarCharData = (data = []) => {
  const charData = data.map((item) => ({
    source: item?.category,
    amount: item?.amount,
  }));
  return charData;
};
import moment from "moment";
export const prepareIncomeBarCharData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const charData = sortedData.map((item) => ({
    month: moment(item?.date).format("DD MM"),
    amount: item?.amount,
    source: item?.source,
  }));
  return charData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("DD MM"),
    amount: item?.amount,
    source: item?.category,
  }));
  return chartData;
};
