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
        {...register('image', { required: true })}
        error={!!errors['image']}
        inputProps={{
          accept: 'image/*',
        }}
        id='icon-button-photo'
        type='file'
      />
      <label htmlFor='icon-button-photo'>
        <IconButton color='primary' component='span'>
          <AddImageIcon />
        </IconButton>
      </label>
      <Button>
        <label htmlFor='icon-button-photo'>Add Photo </label>
      </Button>
    </ImageContainer>
  );
};

export default ImageUploader;
