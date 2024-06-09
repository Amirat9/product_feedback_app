import { FaChevronLeft } from 'react-icons/fa6';
import editFeedback from '../assets/shared/icon-edit-feedback.svg';
import { Link } from 'react-router-dom';
import FormDropdown from '../components/FormDropdown';
const EditFeedback = () => {
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
        <div className='absolute w-14 h-14 top-[-3%] left-6 sm:left-[42px]'>
          <img
            src={editFeedback}
            alt=''
            className='h-full w-full'
          />
        </div>
        <h3 className='h3 text-navy mb-6 sm:mb-10 sm:h1'>
          Editing ‘Add a dark theme option’
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
          <label className='h4 mb-1 mt-6'>Update Status</label>
          <p className='text-gray text-[13px] mb-4'>Change feature state</p>
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
          <div className='flex flex-col mt-10 gap-4 sm:mt-8 sm:flex-row sm:justify-between'>
            <div className='flex flex-col gap-4 sm:flex-row sm:order-2'>
              <button className='bg-purple text-[13px] text-white font-bold py-[10.5px] px-8 rounded-[10px] hover:bg-purple-hover sm:text-sm sm:order-3 sm:px-6'>
                Add Feedback
              </button>
              <button className='bg-navy text-[13px] text-white font-bold py-[10.5px] px-8 rounded-[10px] hover:bg-navy-hover sm:text-sm sm:order-2 sm:px-6'>
                Cancel
              </button>
            </div>
            <button className='bg-red text-[13px] text-white font-bold py-[10.5px] px-8 rounded-[10px] hover:bg-red-hover sm:text-sm sm:order-1 sm:px-6'>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFeedback;
