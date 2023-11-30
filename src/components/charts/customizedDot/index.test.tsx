import '@testing-library/jest-dom';
import CustomizedDot from './index';
import { render } from '@testing-library/react';

describe('CustomizedDot Component', () => {
  it('Should render  without crashing', () => {
    const { container } = render(<CustomizedDot />);
    expect(container).toBeInTheDocument();
  });
  it('Should render null if cx or cy is undefined', () => {
    const { container } = render(<CustomizedDot cx={undefined} cy={10} />);
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(<CustomizedDot cx={10} cy={undefined} />);
    expect(container2.firstChild).toBeNull();
  });
  it('Should render with the correct colors when gray prop is true', () => {
    const { container } = render(<CustomizedDot cx={10} cy={10} gray />);
    const circles = container.querySelectorAll('circle');

    expect(circles[0]).toHaveAttribute('stroke', '#4B506D');
    expect(circles[1]).toHaveAttribute('stroke', '#4B506D');
  });
  it('Should render the correct colors when gray prop is false', () => {
    const { container } = render(<CustomizedDot cx={10} cy={10} />);
    const circles = container.querySelectorAll('circle');

    expect(circles[0]).toHaveAttribute('stroke', '#3751FF');
    expect(circles[1]).toHaveAttribute('stroke', '#3751FF');
  });
});
