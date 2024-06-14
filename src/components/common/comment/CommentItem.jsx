import { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import anneImage from '@/assets/user-images/image-anne.jpg';
const CommentItem = ({ name, username, content }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <div className='flex flex-col gap-4'>
      <div className=' flex items-center justify-between'>
        <div className='flex items-center gap-4 sm:gap-8'>
          <Avatar>
            <AvatarImage src={anneImage} />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <div>
            <h4 className='h4 text-navy sm:text-[14px]'>{name}</h4>
            <h5 className='text-[13px] text-gray sm:text-[14px]'>{`@${username}`}</h5>
          </div>
        </div>
        <Button
          className='bg-transparent text-blue p-0 hover:bg-transparent'
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          Reply
        </Button>
      </div>
      <p className='text-[13px] text-gray sm:text-[15px] sm:ml-[72px]'>
        {content}
      </p>
      <div className={`${showReplyForm ? 'block' : 'hidden'}`}>
        <form className='flex flex-col sm:flex-row sm:gap-4'>
          <textarea
            name='reply'
            id='reply'
            className='bg-backgroundColor text-navy text-[13px] rounded-[5px] mb-4 resize-none py-4 px-6 sm:ml-[72px] sm:flex-1 sm:text-[15px] focus:outline-blue'
          ></textarea>
          <Button className='bg-purple hover:bg-purpleHover'>Post Reply</Button>
        </form>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentItem;
