import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormInputs {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password: string;
  rememberMe: boolean;
}

const useLoginSubmit = () => {
  // const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: 'siam@gmail.com',
      password: '123456',
    },
  });


  const onSubmit: SubmitHandler<LoginFormInputs> = async (_data) => {
    
 
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
