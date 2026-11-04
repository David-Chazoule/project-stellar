export const START_DATE = new Date("2300-01-02T00:00:00Z");

export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);

  newDate.setUTCDate(newDate.getUTCDate() + days);

  return newDate;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};