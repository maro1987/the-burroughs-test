export const isWeekend = (date: Date) => {
  const dayOfTheWeek = date.getDay();
  return dayOfTheWeek === 0 || dayOfTheWeek === 6;
};

export const getFridayBeforeWeekend = (date: Date) => {
  const dayOfTheWeek = date.getDay();
  const weekendDate = new Date(date);
  const daysTooWeekend = dayOfTheWeek === 0 ? 2 : 1;

  weekendDate.setDate(weekendDate.getDate() - daysTooWeekend);
  return weekendDate;
};

export const getWednesdayAfterWeekend = (date: Date) => {
  const dayOfTheWeek = date.getDay();
  const weekendDate = new Date(date);
  const daysTooWeekend = dayOfTheWeek === 0 ? 3 : 4;

  weekendDate.setDate(weekendDate.getDate() + daysTooWeekend);
  return weekendDate;
};
