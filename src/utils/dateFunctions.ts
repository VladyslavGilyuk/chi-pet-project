import { format } from 'date-fns';

//Function accepts Date object and returns a human-readable string in the format 'as of 25 May 2019, 09:41 PM'.
export const formatAsOfDate = (currentDate: Date) => {
  return format(currentDate, "'as of' dd MMM yyyy, hh:mm a");
};
export const formatAsCreateDate = (createDate: string) => {
  return format(new Date(createDate), "'on' dd.MM.yyyy");
};
export const formatAsDeadlineDate = (deadlineDate: string) => {
  return format(new Date(deadlineDate), 'MMMM d, yyyy');
};
export const formatAsHoursDate = (HoursDate: string) => {
  return format(new Date(HoursDate), 'h:mm a');
};
export const updatedDifference = (updatedDate: string) => {
  const today = new Date();
  const dateObj = new Date(updatedDate);
  const timeDifference = Math.abs(today.getTime() - dateObj.getTime());
  const timePassed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return today.toDateString() === dateObj.toDateString()
    ? 'Updated today'
    : `Updated ${timePassed} days ago`;
};
