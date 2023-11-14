import '@testing-library/jest-dom';
import Tag from './index';
import { colors } from '../../../theme';
import { render } from '@testing-library/react';

describe('Tag Component', () => {
  test('renders with default props', () => {
    const renderedTag = render(<Tag text='Default' />);
    const tagElement = renderedTag.getByText('Default');
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveStyle(`background-color: ${colors.grayLightest}`);
    expect(tagElement).toHaveStyle(`color: ${colors.primaryGray}`);
  });
  test('renders with default props if value is not in tagColorMap', () => {
    const renderedTag = render(<Tag text='Unexistent' />);
    const tagElement = renderedTag.getByText('Unexistent');
    expect(tagElement).toHaveStyle(`background-color: ${colors.grayLightest}`);
    expect(tagElement).toHaveStyle(`color: ${colors.primaryGray}`);
  });
});
