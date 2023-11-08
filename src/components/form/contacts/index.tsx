import { ContactsFormHelper } from './helper';
import FormInput from '../../common/formInput';
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
        await dispatch(createContactAsync({ apiUrl, data: body, userStore: userStore }));
      }
      toggleModal();
    } catch (error) {
      Notify('Something went wrong');
    }
  };

  return (
    <>
      <StyledHeading>Add contacts</StyledHeading>
      <form onSubmit={handleSubmit(handleContactSubmit)}>
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
