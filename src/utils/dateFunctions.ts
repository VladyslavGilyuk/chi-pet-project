import { format } from 'date-fns';

//Function accepts Date object and returns a human-readable string in the format 'as of 25 May 2019, 09:41 PM'.
export const formatAsOfDate = (currentDate: Date) => {
  return format(currentDate, "'as of' dd MMM yyyy, hh:mm a");
};
