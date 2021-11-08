import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { Form, InputField } from '@/components/Form';
import Button from '@/components/Button/Button';
import useAuth from '@/hooks/useAuth';

const schema = z.object({
  email: z.string().min(1, 'Email cannot be empty'),
  password: z.string().min(1, 'Password cannot be empty'),
});

type LoginValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          const res = await signIn(values);
          if (res) {
            navigate('/dashboard');
          }
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors.email}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors.password}
              registration={register('password')}
            />
            <Button className="w-full" type="submit" text="Login" />
          </>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
