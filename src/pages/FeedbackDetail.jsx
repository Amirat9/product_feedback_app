import FeedbackItem from '@/components/common/FeedbackItem';
import CommentsCard from '@/components/common/comment/CommentsCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';
const FeedbackDetail = () => {
  const navigate = useNavigate();
  return (
    <div className='px-6 pt-6 pb-[88px] flex flex-col gap-6 h-full sm:px-10 sm:pt-14 sm:pb-[120px] lg:max-w-[730px] lg:mx-auto'>
      {/* Navigation Links */}
      <div className='flex items-center justify-between'>
        <div
          className='flex items-center gap-4 cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft
            className='text-blue'
            size={11}
          />
          <div className='text-[13px] text-gray font-bold'>Go Back</div>
        </div>
        <Button className='bg-blue hover:bg-blueHover'>Edit Feedback</Button>
      </div>
      {/* Feedback */}
      <div className='flex flex-col'>
        <FeedbackItem />
      </div>
      {/* Comments Section */}
      <CommentsCard />
      {/* Post Comment Form Section */}
      <section className='bg-white rounded-[10px] p-6'>
        <form className='flex flex-col'>
          <label
            htmlFor='comment'
            className='h3 text-navy mb-6'
          >
            Add Comment
          </label>
          <textarea
            name='comment'
            id='comment'
            className='bg-backgroundColor rounded-[5px] text-[13px] text-navy resize-none mb-4 p-4 focus:outline-blue focus:ourline-[0.5px] sm:text-[15px]'
            placeholder='Type your comment here'
          ></textarea>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-gray'>250 Characters left</p>
            <Button className='bg-purple px-4 py-[10.5px] rounded-[10px] hover:bg-purpleHover'>
              Post Comment
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FeedbackDetail;
