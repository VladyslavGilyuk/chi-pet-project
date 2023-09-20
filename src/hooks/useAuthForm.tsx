import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';

interface ISignIn {
  email: string;
  password: string;
}
interface ISignUp extends ISignIn {
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}

export interface CommonFieldValues extends FieldValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}
const useAuthForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState({
    email: '',
  });
  /*const value = {
    user,
    setUser,
  };*/
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser !== null) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CommonFieldValues>();

  const onSignInSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    console.log('Form data:', data);
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
    axios
      .post('http://localhost:8080/register', data)
      .then(({ data }) => {
        setUser({
          token: data.accessToken,
          ...data.user,
        });
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: data.accessToken,
            ...data.user,
          }),
        );
        navigate('/');
      })
      .catch((err) => console.log(err.message));
    console.log('Form data:', data);
  };

  return {
    handleSubmit,
    register,
    errors,
    onSignInSubmit,
    onSignUpSubmit,
  };
};

export default useAuthForm;
