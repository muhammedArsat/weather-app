export const convertDateToDay = (parsedDate) => {
  const newDate = new Date(parsedDate);
  const dayIndex = newDate.getDay();
  return dayIndex;
};

export const getTodayDate = () => {
  const newDate = new Date();
  const options = {
    weekday: "long", // full day name (Tuesday)
    year: "numeric", // 2005
    month: "short", // Aug
    day: "numeric",
  };

  const formattedDate = newDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

export const formateTime = (time) => {
  const newTime = new Date(time);
  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedTime = newTime.toLocaleTimeString("en-US", options);
  return formattedTime;
};

export const getWeatherIconFromCode = (code) => {
  if ([0, 1, 2, 3].includes(code)) return 0;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 1;
  if (code >= 71 && code <= 77) return 2;
  if ([95, 96, 97].includes(code)) return 3;
};
