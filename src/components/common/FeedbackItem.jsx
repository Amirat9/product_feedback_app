import { Badge } from '@/components/ui/badge';
import { FaAngleUp, FaComment } from 'react-icons/fa6';
const FeedbackItems = () => {
  return (
    <div className='bg-white rounded-[10px] p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between'>
      <div className='sm:order-2 sm:flex-auto'>
        <h4 className='h4 text-navy mb-2 sm:h3'>Add tags for solution</h4>
        <p className='text-gray mb-2'>
          Easier to search for solutions based on a specific stack.
        </p>
        <Badge
          className={
            'bg-backgroundColor text-blue rounded-[10px] px-4 py-[6px]'
          }
        >
          Enhancement
        </Badge>
      </div>
      <div className='flex items-center justify-between mt-4 sm:order-1 sm:mt-0 sm:mr-10 sm:self-start'>
        <div className='flex items-center justify-between gap-[10px] bg-backgroundColor rounded-[10px] px-3 py-[6px] sm:flex-col sm:px-2 sm:pt-[14px] sm:gap-2'>
          <FaAngleUp className='text-blue' />
          <div className='text-[13px] text-navy font-bold tracking-[-0.18px]'>
            112
          </div>
        </div>
        <div className='flex items-center justify-center gap-1 sm:hidden'>
          <FaComment color='#CDD2EE' />
          <div className='text-navy h4'>2</div>
        </div>
      </div>
      <div className='hidden sm:flex sm:items-center sm:justify-center sm:gap-1 sm:order-3'>
        <FaComment color='#CDD2EE' />
        <div className='text-navy h4'>2</div>
      </div>
    </div>
  );
};

export default FeedbackItems;
