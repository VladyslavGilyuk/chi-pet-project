import '@testing-library/jest-dom';
import { format } from 'date-fns';
import { formatAsOfDate } from './dateFunctions';

jest.mock('date-fns', () => ({
  format: jest.fn(),
}));

describe('formatAsOfDate', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('formats the date correctly', () => {
    const currentDate = new Date('2019-05-25T21:41:00');

    (format as jest.Mock).mockReturnValue('as of 25 May 2019, 09:41 PM');

    const result = formatAsOfDate(currentDate);

    expect(format).toHaveBeenCalledWith(currentDate, "'as of' dd MMM yyyy, hh:mm a");

    expect(result).toBe('as of 25 May 2019, 09:41 PM');
  });
});
/*
describe('formatAsCreateDate', () => {
  it('should format the date correctly', () => {
    const createDate = '2023-01-15T12:30:00';
    const formattedDate = formatAsCreateDate(createDate);
    expect(formattedDate).toBe('on 15.01.2023');
  });
});
*/
