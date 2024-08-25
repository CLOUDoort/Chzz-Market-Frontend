import { ReactNode } from 'react';

const HomeItemList = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <section className="flex flex-col w-full gap-4">
      <label className="text-lg font-semibold">{name}</label>
      <div className="flex items-center gap-4 overflow-x-scroll">
        {children}
      </div>
    </section>
  );
};

export default HomeItemList;