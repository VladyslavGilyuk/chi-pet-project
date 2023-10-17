import { format } from 'date-fns';

//Function accepts Date object and returns a human-readable string in the format 'as of 25 May 2019, 09:41 PM'.
export const formatAsOfDate = (currentDate: Date) => {
  return format(currentDate, "'as of' dd MMM yyyy, hh:mm a");
};
export const formatAsCreateDate = (currentDate: Date) => {
  return format(currentDate, "'on' dd.MM.yyyy");
};
export const formatAsDedlineDate = (currentDate: Date) => {
  return format(currentDate, 'MMMM d, yyyy');
};
export const formatAsHoursDate = (currentDate: Date) => {
  return format(currentDate, 'h:mm a');
};
export const updatedDifference = (updatedDate: Date) => {
  const timeDifference = Math.abs(new Date().getTime() - updatedDate.getTime());
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};
