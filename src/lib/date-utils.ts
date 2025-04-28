
import { isSameDay, isWithinInterval, isWeekend } from "date-fns";

// Brazilian holidays
const getBrazilianHolidays = (year: number): Date[] => {
  // Fixed holidays
  const fixedHolidays = [
    new Date(year, 0, 1),   // New Year's Day
    new Date(year, 3, 21),  // Tiradentes
    new Date(year, 4, 1),   // Labor Day
    new Date(year, 8, 7),   // Independence Day  
    new Date(year, 9, 12),  // Nossa Senhora Aparecida
    new Date(year, 10, 2),  // All Souls' Day
    new Date(year, 10, 15), // Republic Proclamation Day
    new Date(year, 11, 25)  // Christmas
  ];
  
  // Year-end recess (December 23 to January 20 of the following year)
  const recessDates: Date[] = [];
  
  // December 23-31
  for (let day = 23; day <= 31; day++) {
    recessDates.push(new Date(year, 11, day));
  }
  
  // January 1-20 of the following year
  for (let day = 1; day <= 20; day++) {
    recessDates.push(new Date(year + 1, 0, day));
  }
  
  return [...fixedHolidays, ...recessDates];
};

export const isBusinessDay = (date: Date): boolean => {
  // Check if it's a weekend
  if (isWeekend(date)) return false;
  
  // Check against holidays for the current and next year (for year-end recess)
  const year = date.getFullYear();
  const holidays = [
    ...getBrazilianHolidays(year - 1), // For January recess from previous year
    ...getBrazilianHolidays(year),
    ...getBrazilianHolidays(year + 1)  // For December recess into next year
  ];
  
  // Check if date is a holiday
  return !holidays.some(holiday => isSameDay(date, holiday));
};

export const isBusinessHour = (date: Date): boolean => {
  const hours = date.getHours();
  // Business hours: 8:00 to 17:00 (8am to 5pm)
  return hours >= 8 && hours < 17;
};

export const isValidAppointmentTime = (date: Date): boolean => {
  return isBusinessDay(date) && isBusinessHour(date);
};

export const getAvailableTimes = (date: Date): string[] => {
  if (!isBusinessDay(date)) return [];
  
  const times: string[] = [];
  
  // From 8:00 to 16:30 with 30-minute intervals
  for (let hour = 8; hour < 17; hour++) {
    for (let minute of [0, 30]) {
      // Skip 16:30 as the last appointment would end at 17:00
      if (hour === 16 && minute === 30) continue;
      
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      times.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  
  return times;
};
