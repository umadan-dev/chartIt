export const timeStampToDateHandler = (timeStamp) => {
  const dateObject = new Date(timeStamp);

  const humanDateFormat = dateObject.toLocaleString();

  return `${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getDate()}/${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getMonth()}/${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getFullYear()}`;
};

export const getObjHandler = (array) => {
  const [data1, data2, data3, data4, data5, data6, data7, data8, date] = array;

  return {
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    date: timeStampToDateHandler(date),
  };
};
