import { cn } from '@/lib/utils';

import { CalendarIcon } from '@radix-ui/react-icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';

import {
  FieldValues,
  ControllerProps,
  FieldPath,
  Controller,
  FieldError,
} from 'react-hook-form';
import { Button } from '../ui/button';
import Label from '../ui/label';

export default function SelectDate<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  mode,
  error,
  labelShow,
}: {
  control: ControllerProps<TFieldValues, TName>['control'];
  name: TName;
  label?: string;
  mode?: 'single' | 'range';
  error?:
    | FieldError
    | {
        message: string;
      }
    | undefined;
  labelShow?: boolean;
}) {
  return (
    <div>
      {labelShow && <Label htmlFor={name.toString()}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required!` }}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full pl-3 text-left font-normal',
                  !field.value && 'text-muted-foreground',
                )}
              >
                {field.value ? (
                  format(field.value, 'PPP')
                ) : (
                  <span>{label}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode={mode}
                selected={field.value}
                onSelect={field.onChange}
                // disabled={(date) =>
                //   date > new Date() || date < new Date('1900-01-01')
                // }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

SelectDate.defaultProps = {
  mode: 'single',
  label: 'Select Date',
  labelShow: true,
  error: undefined,
};
