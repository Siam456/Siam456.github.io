import React from 'react';
import InputArea from '@/components/form/InputArea';

import SSOButtons from '@/components/customButtons/SSOButtons';
import TextButton from '@/components/customButtons/TextButton';
import { Button } from '@/components/ui/button';
import useLoginSubmit from '@/hooks/useLoginSubmit';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Signup() {
  const { register, handleSubmit, errors, onSubmit } = useLoginSubmit();
  return (
    <div className="flex min-h-screen items-center p-6 ">
      <Card className="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg  shadow-xl ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className=" h-44 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="h-full w-full object-cover "
              src="/img/register.jpg"
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center rounded-r-2xl  p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <CardHeader className="px-0">
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Sign up to create a new account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputArea
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Bruce"
                  register={register}
                  error={errors?.firstName}
                />
                <InputArea
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Wayne"
                  register={register}
                  error={errors?.lastName}
                />
                <InputArea
                  label="Email "
                  name="email"
                  type="text"
                  // defaultValue="siam@gmail.com"
                  placeholder="mail@example.com"
                  register={register}
                  error={errors?.email}
                />
                <InputArea
                  label="Password"
                  name="password"
                  // defaultValue="123456"
                  placeholder="***********"
                  type="password"
                  register={register}
                  error={errors?.password}
                />

                {/* <Button
                    pt={{
                      label: 'text-white text-center font-normal',
                    }}
                    // disabled={loading}
                    type="submit"
                    className="mt-4 h-12 w-full bg-green-500"
                    // to="/orders"
                  >
                    Sign up
                  </Button> */}

                <Button className="mt-4 h-12 w-full" type="submit" color="dark">
                  Sign up
                </Button>
                <hr className="my-10" />
              </form>

              <SSOButtons />

              <p className="mt-4 flex text-sm font-medium text-gray-600">
                Already have an account?
                <TextButton className="ml-1" href="/sign-in" text="Sign in" />
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
