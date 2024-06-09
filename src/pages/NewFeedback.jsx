import { FaChevronLeft } from 'react-icons/fa6';
import newFeedback from '../assets/shared/icon-new-feedback.svg';
import { Link } from 'react-router-dom';
import FormDropdown from '../components/FormDropdown';
const NewFeedback = () => {
  return (
    <div className='px-6 pt-8 sm:px-[114px] md:max-w-[540px] md:px-0 md:mx-auto '>
      <div className='flex items-center gap-4 mb-14'>
        <FaChevronLeft
          color='blue'
          size={10}
        />
        <Link className='text-gray text-[13px] font-bold'>Go back</Link>
      </div>
      <div className='bg-white rounded-[10px] px-6 pt-10 pb-6 relative sm:px-[42px] sm:pb-10 sm:pt-[52px]'>
        <div className='absolute top-[-4.1%] left-6 sm:left-[42px]'>
          <img
            src={newFeedback}
            alt=''
          />
        </div>
        <h3 className='h3 text-navy mb-6 sm:mb-10 sm:h1'>
          Create New Feedback
        </h3>
        <form className='flex flex-col'>
          <label
            htmlFor='title'
            className='h4 mb-1'
          >
            Feedback Title
          </label>
          <p className='text-gray text-[13px] mb-4'>
            Add a short, descriptive headline
          </p>
          <input
            type='text'
            name='title'
            id='title'
            className='mb-6 p-4 rounded-[5px] text-navy text-[13px] cursor-pointer bg-bg-color focus:border focus:border-blue focus:outline-none'
          />
          <label className='h4 mb-1'>Category</label>
          <p className='text-gray text-[13px] mb-4'>
            Choose a category for your feedback
          </p>
          <FormDropdown />
          <label
            htmlFor='detail'
            className='h4 mt-6 mb-1'
          >
            Feedback Detail
          </label>
          <p className='text-gray text-[13px] mb-4'>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            name='detail'
            id='detail'
            className={`bg-bg-color text-[15px] text-navy rounded-[5px] px-6 py-4  overflow-hidden cursor-pointer resize-none focus:border focus:border-blue focus:outline-none active:border active:border-blue`}
          ></textarea>
          <div className='text-red text-sm mt-1'>{`Can't be empty`}</div>
          <div className='flex flex-col mt-10 gap-4 sm:mt-8 sm:flex-row sm:justify-end'>
            <button className='bg-purple text-[13px] text-white font-bold py-[10.5px] px-8 rounded-[10px] hover:bg-purple-hover sm:order-2 sm:text-sm'>
              Add Feedback
            </button>
            <button className='bg-navy text-[13px] text-white font-bold py-[10.5px] px-8 rounded-[10px] hover:bg-navy-hover sm:text-sm'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFeedback;
