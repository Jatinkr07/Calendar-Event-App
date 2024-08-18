/**
 * Get all days in a given month.
 * @param {number} month - The month for which to get the days (0 for January, 1 for February, etc.).
 * @param {number} [year=new Date().getFullYear()] - The year for which to get the days. Defaults to the current year.
 * @returns {number[]} - An array of days in the month.
 */
export const getDaysInMonth = (month, year = new Date().getFullYear()) => {
  // Create a date object for the first day of the given month and year
  const date = new Date(year, month, 1);
  const days = [];

  // Loop through the days of the month
  while (date.getMonth() === month) {
    days.push(date.getDate()); // Add the day of the month to the array
    date.setDate(date.getDate() + 1); // Move to the next day
  }

  return days;
};
