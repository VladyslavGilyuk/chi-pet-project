import { ReactComponent as AddImageIcon } from '../../../assets/addImage.svg';
import { IContactFieldValues } from '../../../types/contacts';
import { Button, IconButton } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ImageContainer, StyledInput } from './styled';
interface IProps {
  register: UseFormRegister<IContactFieldValues>;
  errors: FieldErrors<IContactFieldValues>;
}

const ImageUploader = ({ register, errors }: IProps) => {
  return (
    <ImageContainer>
      <StyledInput
        {...register('image')}
        error={!!errors['image']}
        label='Image'
        inputProps={{
          accept: 'image/*',
        }}
        id='icon-button-photo'
        data-testid='file_input'
        type='file'
      />
      <label htmlFor='icon-button-photo'>
        <IconButton data-testid='icon_button' color='primary' component='span'>
          <AddImageIcon data-testid='icon' />
        </IconButton>
      </label>
      <Button data-testid='text_button'>
        <label htmlFor='icon-button-photo' data-testid='text'>
          Add Photo
        </label>
      </Button>
    </ImageContainer>
  );
};

export default ImageUploader;
