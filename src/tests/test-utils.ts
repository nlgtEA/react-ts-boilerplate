import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import AppProvider from '@/providers/AppProvider';

export const render = (ui: any, { ...renderOptions }: Record<string, any> = {}) => ({
  ...rtlRender(ui, { wrapper: AppProvider as React.FunctionComponent<unknown>, ...renderOptions }),
});

export * from '@testing-library/react';
export { rtlRender };
