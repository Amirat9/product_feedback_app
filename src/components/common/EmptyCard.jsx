import illustrationEmpty from '../../assets/suggestions/illustration-empty.svg';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
const EmptyCard = () => {
  return (
    <div className='bg-white rounded-[10px] h-full'>
      <div className='flex flex-col items-center justify-center text-center px-6 py-[76px] sm:py-[110px] sm:px-[139px] lg:px-[206px]'>
        <div className='mb-10 w-[130px] h-[135px]'>
          <img
            src={illustrationEmpty}
            alt='Illustrations Empty Icon'
            className='h-full w-full'
          />
        </div>
        <div>
          <h1 className='h3 text-navy mb-[14px] sm:h1'>
            There is no feedback yet.
          </h1>
          <p className='text-[13px] text-gray mb-6 sm:text-base'>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
          <Button className='bg-purple text-[13px] font-bold rounded-[10px] hover:bg-purpleHover sm:text-[14px] sm:px-6'>
            <Link to='/new-feedback'>+ Add Feedback</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
