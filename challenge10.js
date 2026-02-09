/*
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  const averageDailyHours = Number((totalHours / dailyHours.length).toFixed(1));

  let maxHours = -Infinity;
  let dayWithMostHoursIndex = 0;

  dailyHours.forEach((hours, index) => {
    if (hours > maxHours) {
      maxHours = hours;
      dayWithMostHoursIndex = index;
    }
  });

  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours: daysOfWeek[dayWithMostHoursIndex],
    daysWorked,
    isFullTime,
  };
}

const hours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
console.log(analyzeWorkWeek(hours));
*/
function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error(
      "O array deve conter exatamente 7 valores, um para cada dia da semana.",
    );
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  const averageDailyHours = Number((totalHours / dailyHours.length).toFixed(1));

  let maxHours = -Infinity;
  let dayWithMostHoursIndex = 0;

  dailyHours.forEach((hours, index) => {
    if (hours > maxHours) {
      maxHours = hours;
      dayWithMostHoursIndex = index;
    }
  });

  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours: daysOfWeek[dayWithMostHoursIndex],
    daysWorked,
    isFullTime,
  };
}
analyzeWorkWeek([8, 7.5, 0, 9, 6, 4, 0]);
console.log(analyzeWorkWeek([8, 7.5, 0, 9, 6, 4, 0]));
