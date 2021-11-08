import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;
  return (
    <div>
      <label
        htmlFor={label}
        className={clsx('block mt-1 text-sm font-medium text-gray-600', className)}
      >
        {label}
        <div id={label} className="mt-1">
          {children}
        </div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm absolute text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
