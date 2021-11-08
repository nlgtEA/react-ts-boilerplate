import React from 'react';

import { ReactComponent as ProjectionSVG } from '@/assets/projections.svg';

type PublicLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const PublicFormLayout = ({ children, title }: PublicLayoutProps) => (
  <div className="h-screen bg-blueGray-50 flex flex-col md:flex-row justify-center items-center py-82 px-6 md:p-0 ">
    <div className="hidden lg:flex flex-col h-screen w-2/3 py-8 px-4 justify-center items-center">
      <ProjectionSVG className="w-full" />
    </div>
    <div className="bg-white flex flex-col justify-center items-center py-8 px-4 w-full max-w-md shadow rounded-lg sm:px-10 md:py-16 lg:w-1/3 lg:rounded-none lg:max-w-none lg:h-full">
      <div className="w-full max-w-lg ">
        <h1 className="text-blueGray-800 text-3xl md:text-4xl self-center md:self-start tracking-wide font-extrabold">
          {title}
        </h1>
      </div>
      <div className="mt-4 md:mt-12 w-full max-w-lg">{children}</div>
    </div>
  </div>
);

export default PublicFormLayout;
