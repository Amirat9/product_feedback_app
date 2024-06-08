import PropTypes from 'prop-types';
import Tag from './Tag';
import { FaChevronUp, FaComment } from 'react-icons/fa6';

const FeedbackItem = ({ title, description, upvotes, comments, category }) => {
  return (
    <div className='bg-white rounded-[10px] p-6 sm:flex sm:items-start'>
      <div className='sm:order-2'>
        <h4 className='h4 mb-2 sm:h3 sm:mb-1'>{title}</h4>
        <p className='text-gray mb-2 sm:mb-3'>{description}</p>
        <Tag type='classification'>
          <span>{category}</span>
        </Tag>
      </div>
      <div className='flex items-center justify-between mt-4 sm:order-1  sm:mt-0 sm:mr-10'>
        <Tag type='upvote'>
          <FaChevronUp
            size={12}
            color='blue'
            className='inline-block font-bold mr-[10px] sm:mx-auto sm:mb-2'
          />
          <span className=' h4'>{upvotes}</span>
        </Tag>
        <div className='sm:hidden sm:order-3 sm:ml-auto sm:self-center'>
          <FaComment
            size={12}
            className='inline-block mr-1'
            color='#cdd6ee'
          />
          <span
            className={` h4 ${comments === 0 ? 'text-navy/50' : 'text-navy'}`}
          >
            {comments}
          </span>
        </div>
      </div>
      <div className='hidden sm:block sm:order-3 sm:ml-auto sm:self-center'>
        <FaComment
          size={12}
          className='inline-block mr-1'
          color='#cdd6ee'
        />
        <span
          className={` h4 ${comments === 0 ? 'text-navy/50' : 'text-navy'}`}
        >
          {comments}
        </span>
      </div>
    </div>
  );
};

FeedbackItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default FeedbackItem;
