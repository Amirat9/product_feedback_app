import { useState } from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';
import Modal from '@/layouts/Modal';
import FeedbackItem from '@/components/common/FeedbackItem';
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='flex flex-col max-w-[1440px] h-full mx-auto sm:gap-10 sm:pt-14 sm:px-10 lg:flex-row lg:gap-[30px] lg:px-[100px] xl:px-[165px] lg:pt-[94px]'>
      <Sidebar />
      {isMenuOpen && (
        <div className='relative h-full'>
          <Modal />
          <Header />
          <main className='px-6 pt-8'>
            <FeedbackItem />
          </main>
        </div>
      )}
      {!isMenuOpen && (
        <div className='w-full'>
          <Header />
          <main className='px-6 pt-8 sm:mt-6 sm:p-0'>
            <FeedbackItem />
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
