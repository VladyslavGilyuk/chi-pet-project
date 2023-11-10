import { ReactComponent as AddImageIcon } from '../../../assets/addImage.svg';
import { ContactsFormHelper } from './helper';
import FormInput from '../../common/formInput';
import { Notify } from '../../../utils/notify';

import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { user } from '../../../store/user/selectors';
import { Button, IconButton } from '@mui/material';
import {
  EmptyHelperText,
  FlexContainer,
  HelperImageText,
  HelperText,
  StyledCancelButton,
  StyledHeading,
  StyledInput,
  StyledLoginButton,
} from './styled';
import {
  IContactFieldValues,
  IContactState,
  IContacts,
  IUpdateContacts,
} from '../../../types/contacts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createContactAsync, updateContactAsync } from '../../../store/contacts/thunk';
import { memo, useState } from 'react';
interface IProps {
  toggleModal: () => void;
  initialValues: IContactState | null;
  isEdit?: boolean;
  apiUrl: string;
}
const ContactsForm = ({ toggleModal, initialValues, isEdit, apiUrl }: IProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IContactFieldValues>({
    defaultValues: {
      ...initialValues,
    },
  });

  const dispatch = useAppDispatch();
  const userStore = useSelector(user);

  const handleContactSubmit: SubmitHandler<IContacts | IUpdateContacts> = async (
    data: IContacts | IUpdateContacts,
  ) => {
    try {
      if (isEdit) {
        const body = { ...data } as IUpdateContacts;
        await dispatch(updateContactAsync({ id: body.id, data: body }));
      } else {
        const body = { ...data } as IContacts;
        await dispatch(createContactAsync({ apiUrl, data: body, user: userStore }));
      }
      toggleModal();
    } catch (error) {
      Notify('Something went wrong');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const getHelperComponent = () => {
    switch (true) {
      case !!fileName:
        return <HelperImageText>{fileName}</HelperImageText>;
      case !!errors['image']:
        return <HelperText>Image is required</HelperText>;
      default:
        return <EmptyHelperText>.</EmptyHelperText>;
    }
  };
  return (
    <>
      <StyledHeading>Add contacts</StyledHeading>
      <form onSubmit={handleSubmit(handleContactSubmit)}>
        <label htmlFor='icon-button-photo'>
          <StyledInput
            {...register('image', { required: true })}
            error={!!errors['image']}
            inputProps={{
              accept: 'image/*',
            }}
            id='icon-button-photo'
            type='file'
            onChange={handleFileChange}
          />

          <IconButton color='primary' component='span'>
            <AddImageIcon />
          </IconButton>

          <Button>
            <label htmlFor='icon-button-photo'>Add Photo </label>
          </Button>

          {getHelperComponent()}
        </label>
        {ContactsFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
            register={register}
            isError={!!errors[instance.name]}
            helperMsg={errors[instance.name]?.message}
          />
        ))}
        <FlexContainer>
          <StyledLoginButton
            type='submit'
            variant='contained'
            fullWidth={true}
            disableElevation={true}
          >
            Save
          </StyledLoginButton>

          <StyledCancelButton
            onClick={toggleModal}
            variant='contained'
            fullWidth={true}
            disableElevation={true}
          >
            Cancel
          </StyledCancelButton>
        </FlexContainer>
      </form>
    </>
  );
};
export default memo(ContactsForm);
