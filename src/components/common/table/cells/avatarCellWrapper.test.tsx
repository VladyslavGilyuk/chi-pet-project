import '@testing-library/jest-dom';
import { AvatarCellWrapper } from './avatarCellWrapper';
import { render, screen } from '@testing-library/react';

describe('AvatarCellWrapper', () => {
  it('Should render the component with user photo and children', () => {
    render(
      <AvatarCellWrapper>
        <div data-testid='child-component'>Child Component</div>
      </AvatarCellWrapper>,
    );
    const userPhotoElement = screen.getByTestId('user_photo');
    expect(userPhotoElement).toBeInTheDocument();

    const childComponent = screen.getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
  });
});
