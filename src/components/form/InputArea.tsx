import React, { useState } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import Label from '../ui/label';

interface Props {
  labelShow?: boolean;
  label: string;
  name: keyof FieldValues;
  register: any;
  error?:
    | FieldError
    | {
        message: string;
      }
    | undefined;
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'checkbox'
    | 'datetime-local';
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
}

function InputArea({
  labelShow,
  label,
  name,
  register,
  error,
  type,
  placeholder,
  required,
  defaultValue,
  className,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-2 flex flex-col gap-1 ">
      {labelShow && <Label htmlFor={name.toString()}>{label}</Label>}
      <div className="relative">
        <Input
          type={
            type === 'password' ? (!showPassword ? 'password' : 'text') : type
          }
          className={`${className} `}
          defaultValue={defaultValue}
          placeholder={placeholder || label}
          id={name.toString()}
          {...register(name, {
            required: required ? `${label} is required!` : false,
          })}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 "
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

InputArea.defaultProps = {
  labelShow: true,
  type: 'text',
  placeholder: '',
  required: true,
  error: undefined,
  defaultValue: '',
  className: '',
};

export default InputArea;
