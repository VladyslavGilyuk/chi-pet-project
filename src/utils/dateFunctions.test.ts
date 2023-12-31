import '@testing-library/jest-dom';
import {
  formatAsCreateDate,
  formatAsDeadlineDate,
  formatAsHoursDate,
  formatAsOfDate,
  updatedDifference,
} from './dateFunctions';

describe('Date functions tests', () => {
  test('Should return correct format of Date', () => {
    const currentDate = new Date('2019-05-25T21:41:00');
    const currentStringDate = '2019-05-25T21:41:00';
    const todayDate = new Date();
    const passedDate = new Date(todayDate.getTime() - 2 * 24 * 60 * 60 * 1000);

    expect(formatAsOfDate(currentDate)).toEqual('as of 25 May 2019, 09:41 PM');
    expect(formatAsCreateDate(currentStringDate)).toEqual('on 25.05.2019');
    expect(formatAsDeadlineDate(currentStringDate)).toEqual('May 25, 2019');
    expect(formatAsHoursDate(currentStringDate)).toEqual('9:41 PM');

    expect(updatedDifference(todayDate.toString())).toEqual('Updated today');
    expect(updatedDifference(passedDate.toString())).toEqual('Updated 3 days ago');
  });
});
