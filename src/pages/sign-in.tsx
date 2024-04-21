import React from 'react';

import InputArea from '@/components/form/InputArea';

import SSOButtons from '@/components/customButtons/SSOButtons';
import TextButton from '@/components/customButtons/TextButton';
import useLoginSubmit from '@/hooks/useLoginSubmit';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Signin() {
  const router = useRouter();
  const { register, handleSubmit, errors, onSubmit } = useLoginSubmit();

  const redirectCB = (path: string) => router.push(path);
  return (
    <div className="flex min-h-screen items-center  p-6 ">
      <Card className="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg shadow-xl ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className=" h-44 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="h-full w-full object-cover "
              src="/img/login.jpg"
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center rounded-l-2xl  p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <CardHeader className="px-0">
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Sign in to your account</CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit(onSubmit)}>
                <InputArea
                  label="Username / Email "
                  name="username"
                  type="text"
                  defaultValue="siam@gmail.com"
                  placeholder="mail@example.com"
                  register={register}
                  error={errors?.username}
                />
                <InputArea
                  label="Password"
                  name="password"
                  defaultValue="123456"
                  placeholder="***********"
                  type="password"
                  register={register}
                  error={errors?.password}
                />

                <Button
                  className="mt-4 h-12 w-full"
                  onClick={() => redirectCB('/dashboard')}
                  type="submit"
                  color="dark"
                >
                  Sign In
                </Button>
              </form>
              <hr className="my-10" />
              <SSOButtons />

              <p className="mt-4">
                <TextButton href="/forgot-password" text="Forgot password?" />
              </p>
              <p className="mt-1 flex text-sm font-medium text-gray-600 dark:text-gray-50">
                New user?
                <TextButton
                  className="ml-1"
                  href="/sign-up"
                  text="Create an account"
                />
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
