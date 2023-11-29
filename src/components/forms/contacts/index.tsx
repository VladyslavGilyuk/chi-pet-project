import { ContactsFormHelper } from './helper';
import FormInput from '../../common/formInput';
import ImageUploader from '../../common/imageUploader';
import { Notify } from '../../../utils/notify';
import { memo } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { user } from '../../../store/user/selectors';
import { FlexContainer, StyledCancelButton, StyledHeading, StyledLoginButton } from './styled';
import {
  IContactFieldValues,
  IContactState,
  IContacts,
  IUpdateContacts,
} from '../../../types/contacts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createContactAsync, updateContactAsync } from '../../../store/contacts/thunk';
interface IProps {
  toggleModal: () => void;
  initialValues: IContactState | null;
  isEdit?: boolean;
  apiUrl: string;
}
const ContactsForm = ({ toggleModal, initialValues, isEdit, apiUrl }: IProps) => {
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
  const currentUser = useSelector(user);

  const handleContactSubmit: SubmitHandler<IContacts | IUpdateContacts> = async (
    data: IContacts | IUpdateContacts,
  ) => {
    try {
      if (isEdit) {
        const body = { ...data } as IUpdateContacts;
        await dispatch(updateContactAsync({ id: body.id, data: body }));
      } else {
        const body = { ...data } as IContacts;
        await dispatch(createContactAsync({ apiUrl, data: body, user: currentUser }));
      }
      toggleModal();
    } catch (error) {
      Notify('Something went wrong');
    }
  };
  return (
    <>
      <StyledHeading data-testid='form_heading'>Add contacts</StyledHeading>
      <form data-testid='contacts_form' onSubmit={handleSubmit(handleContactSubmit)}>
        <ImageUploader register={register} errors={errors} />
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
            data-testid={'save_button'}
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
