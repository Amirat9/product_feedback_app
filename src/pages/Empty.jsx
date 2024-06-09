import Modal from '../layouts/Modal';
import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';
import empty from '../assets/suggestions/illustration-empty.svg';
import { Link } from 'react-router-dom';
const Empty = () => {
  const isOpen = false;
  return (
    <div className='h-full md:flex md:gap-[30px]'>
      <Sidebar />
      {isOpen && <Modal />}
      <div className='h-full md:w-full'>
        <Header />
        <main className='mx-6 mt-8 h-full sm:mx-0 md:mx-0 md:mt-6'>
          <div className='bg-white rounded-[10px] px-6 py-[76px] sm:px-[142px] sm:py-[110px] md:px-[209px]  flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center text-center'>
              <div className='mb-10'>
                <img
                  src={empty}
                  alt=''
                />
              </div>
              <h4 className='h3 mb-[14px] sm:h1'>There is no feedback yet.</h4>
              <p className='text-gray text-[13px] mb-6 sm:text-base'>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <Link
                to='/new-feedback'
                className='bg-purple border-0 text-white px-4 py-[10.5px] rounded-[10px] text-[13px] font-bold hover:bg-purple-hover md:px-6'
              >
                + Add Feedback
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Empty;
