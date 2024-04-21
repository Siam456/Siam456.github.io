import { FieldError, FieldValues } from 'react-hook-form';
import { Textarea as TXA } from '../ui/textarea';
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

  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
}

function TextArea({
  labelShow,
  label,
  name,
  register,
  error,

  placeholder,
  required,
  defaultValue,
  className,
}: Props) {
  return (
    <div className="mb-2 flex flex-col gap-1 ">
      {labelShow && <Label htmlFor={name.toString()}>{label}</Label>}
      <div className="relative">
        <TXA
          className={`${className} `}
          defaultValue={defaultValue}
          placeholder={placeholder || label}
          id={name.toString()}
          {...register(name, {
            required: required ? `${label} is required!` : false,
          })}
        />
      </div>
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

TextArea.defaultProps = {
  labelShow: true,

  placeholder: '',
  required: true,
  error: undefined,
  defaultValue: '',
  className: '',
};

export default TextArea;
