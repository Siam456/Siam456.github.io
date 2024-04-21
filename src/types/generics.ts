/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import type {
  Control,
  Path,
  UseFormSetValue,
  UseFormGetValues,
  UseFormWatch,
  UseFormRegister,
} from 'react-hook-form';

export type Layout = 'base' | 'none';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout: Layout;
  // filterRedir: boolean;
};

type Component = {
  Component: NextPageWithLayout;
};

export type AppPropsWithLayout = AppProps & Component;

export type Nullable<T> = T | null;

export type Undefinable<T> = T | undefined;

export type JSONData<T extends string = string> = {
  [key in T]: string | number | boolean | object | object[];
};

export type FormData = Record<string, unknown>;

export type FormController<T extends FormData> = Control<T, any>;

export type FormPath<T extends FormData> = Path<T>;

export type FormSetValue<T extends FormData> = UseFormSetValue<T>;

export type FormGetValue<T extends FormData> = UseFormGetValues<T>;

export type FormWatcher<T extends FormData> = UseFormWatch<T>;

export type FormRegister<T extends FormData> = UseFormRegister<T>;

export interface IVersion {
  id: number;
  name: string;
  version: number;
  api: string;
  createdAt: Date;
  updatedAt: Date;
}
