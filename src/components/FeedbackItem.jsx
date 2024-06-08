import Tag from './Tag';
import { FaChevronUp, FaComment } from 'react-icons/fa6';

const FeedbackItem = () => {
  return (
    <div className='bg-white rounded-[10px] p-6 sm:flex sm:items-start'>
      <div className='sm:order-2'>
        <h4 className='h4 mb-2'>Add Tags for solutions</h4>
        <p className='text-gray mb-2'>
          Easier to search for solutions based on specific stack.
        </p>
        <Tag type='classification'>
          <span>Enhancement</span>
        </Tag>
      </div>
      <div className='flex items-center justify-between mt-4 sm:order-1  sm:mt-0'>
        <Tag type='upvote'>
          <FaChevronUp
            size={12}
            className='inline-block font-bold mr-[10px]'
          />
          <span className='text-navy h4'>112</span>
        </Tag>
      </div>
      <div className='sm:order-3 sm:ml-auto sm:self-center'>
        <FaComment
          size={12}
          className='inline-block mr-1'
          color='#cdd6ee'
        />
        <span className='text-navy h4'>2</span>
      </div>
    </div>
  );
};

export default FeedbackItem;
