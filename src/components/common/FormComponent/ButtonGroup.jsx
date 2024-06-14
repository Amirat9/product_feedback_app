import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';

const ButtonGroup = ({ type = 'add' }) => {
  return (
    <>
      {type === 'edit' ? (
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='flex flex-col sm:order-2 sm:flex gap-4 sm:flex-row'>
            <Button className='bg-purple text-[13px] font-bold rounded-[10px] hover:bg-purpleHover sm:order-2 sm:px-6'>
              Add Feedback
            </Button>
            <Button className='bg-navy text-[13px] font-bold rounded-[10px] hover:bg-navyHover sm:px-6'>
              Cancel
            </Button>
          </div>
          <Button className='bg-red text-[13px] font-bold rounded-[10px] hover:bg-redHover sm:px-6'>
            Delete
          </Button>
        </div>
      ) : (
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-end'>
          <Button className='bg-purple text-[13px] font-bold rounded-[10px] hover:bg-purpleHover sm:order-2 sm:px-6'>
            Add Feedback
          </Button>
          <Button className='bg-navy text-[13px] font-bold rounded-[10px] hover:bg-navyHover sm:px-6'>
            Cancel
          </Button>
        </div>
      )}
    </>
  );
};

ButtonGroup.propTypes = {
  type: PropTypes.string,
};

export default ButtonGroup;
