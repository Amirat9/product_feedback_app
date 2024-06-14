import { useState } from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';
import Modal from '@/layouts/Modal';
import EmptyCard from '@/components/common/EmptyCard';
const Empty = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='flex flex-col max-w-[1440px] h-full mx-auto sm:gap-10 sm:pt-14 sm:px-10 sm:pb-[54px] lg:pb-[129px] lg:flex-row lg:gap-[30px] lg:px-[100px] xl:px-[165px] lg:pt-[94px]'>
      <Sidebar />
      {isMenuOpen && (
        <div className='relative h-full'>
          <Modal />
          <Header />
          <main className='px-6 pt-8'>
            <EmptyCard />
          </main>
        </div>
      )}
      {!isMenuOpen && (
        <div className='flex flex-col h-full w-full'>
          <Header />
          <main className='px-6 pt-8 pb-[47px] sm:flex-1 sm:mt-6 sm:p-0'>
            <EmptyCard />
          </main>
        </div>
      )}
    </div>
  );
};

export default Empty;
