import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  isBefore,
  addYears,
  addMonths,
  addWeeks,
} from 'date-fns';

export function today() {
  return new Date((new Date()).toISOString().substr(0, 10));
}

export function getHumanDateDiff(date) {
  const isPastDate = isBefore(date, today());
  const suffix = isPastDate ? 'ago' : 'left';

  const weekDiff = differenceInWeeks(today(), date);
  if (Math.abs(weekDiff) < 8) {
    const days = differenceInDays(today(), addWeeks(date, weekDiff))
    return `${Math.abs(weekDiff)} weeks and ${Math.abs(days)} days ${suffix}`;
  }
  const yearDiff = differenceInYears(today(), date);
  const dateYearCorrected = addYears(date, yearDiff);
  const monthDiff = differenceInMonths(today(), dateYearCorrected);
  const dateMonthCorrected = addMonths(dateYearCorrected, monthDiff)
  const dayDiff = differenceInDays(today(), dateMonthCorrected);
  return `${Math.abs(yearDiff)} years and ${Math.abs(monthDiff)} months and ${Math.abs(dayDiff)} days ${suffix}`.replace(/0 years and |0 months and /, '');
}