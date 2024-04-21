import React, { Fragment } from 'react';

import { Button } from '@/components/ui/button';

import { Dialog, Transition } from '@headlessui/react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

import Textarea from '@/components/form/TextArea';

import InputArea from '../form/InputArea';

const FormSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  start: z.date({
    required_error: 'Start date is required',
  }),
  end: z.date({
    required_error: 'End date is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
});

export default function EventDialog({
  isOpen,
  setIsOpen,
  defaultEvent,
  addEvents,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultEvent?: any;
  addEvents: (_events: any) => void;
}) {
  const endDate = new Date();
  endDate.setDate(new Date().getDate() + 1);

  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
    defaultValues: defaultEvent,
  });

  const {
    formState: { errors },
    handleSubmit,
  } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addEvents(data);

    setIsOpen(false);

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-background/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 text-start shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                <div className="mb-4">
                  <Dialog.Title
                    as="h3"
                    className="flex flex-col space-y-1.5 text-center sm:text-left"
                  >
                    Add Event
                  </Dialog.Title>
                  <p className="text-sm text-muted-foreground">
                    Add a new event to your calendar.
                  </p>
                </div>
                <Form {...form}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid items-start gap-4"
                  >
                    <div className="grid gap-2">
                      <InputArea
                        register={form.register}
                        type="text"
                        name="title"
                        label="Event Title"
                        placeholder="Enter event title here"
                        error={errors?.title}
                      />
                    </div>

                    <div className="grid gap-2">
                      <InputArea
                        register={form.register}
                        type="datetime-local"
                        className="block"
                        name="start"
                        label="Start Date"
                        
                        placeholder="Event Start Date"
                        error={errors?.start}
                      />
                    </div>
                    <div className="grid gap-2">
                      <InputArea
                        register={form.register}
                        type="datetime-local"
                        name="end"
                        className="block"
                        label="Event End Date"
                        defaultValue={new Date().toISOString().slice(0, 16)}
                        placeholder="Event End Date"
                        error={errors?.end}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Textarea
                        label="Description"
                        register={form.register}
                        name="description"
                        error={errors?.description}
                        placeholder="Enter event description here"
                      />
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                      <Button
                        variant="destructive"
                        onClick={() => setIsOpen(false)}
                        type="button"
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Save changes</Button>
                    </div>
                  </form>
                </Form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

EventDialog.defaultProps = {
  defaultEvent: {},
};
