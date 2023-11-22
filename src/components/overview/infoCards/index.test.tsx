import '@testing-library/jest-dom';
import InfoCards from './index';
import { render } from '@testing-library/react';

jest.mock('./helper', () => ({
  cardsData: [
    { heading: 'Test Heading 1', value: 'Test Value 1' },
    { heading: 'Test Heading 2', value: 'Test Value 2' },
  ],
}));

describe('InfoCards component', () => {
  it('Should render correctly with mock data', () => {
    const { getByText } = render(<InfoCards />);

    expect(getByText('Test Heading 1')).toBeInTheDocument();
    expect(getByText('Test Value 1')).toBeInTheDocument();

    expect(getByText('Test Heading 2')).toBeInTheDocument();
    expect(getByText('Test Value 2')).toBeInTheDocument();
  });
});
