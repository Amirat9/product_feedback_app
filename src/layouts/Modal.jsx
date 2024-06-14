import Category from '@/components/ui/CategoryFilter';
import { Link } from 'react-router-dom';
const Modal = () => {
  const statuses = [
    {
      status: 'Planned',
      count: 2,
    },
    {
      status: 'In-Progress',
      count: 3,
    },
    {
      status: 'Live',
      count: 1,
    },
  ];
  const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  return (
    <div className='bg-black/15 absolute top-0 left-0 right-0 bottom-0'>
      <div className='w-3/4 h-full bg-backgroundColor p-6 ml-auto'>
        <div className='bg-white p-6 items-center flex-wrap gap-x-2 gap-y-[14px] rounded-[10px] flex-1 h-fit flex mb-6'>
          {categories.map((category, index) => (
            <Category
              key={index}
              name={category}
            />
          ))}
        </div>
        <div
          className={`bg-white p-6 rounded-[10px] w-full h-fit flex-col flex-1 gap-6`}
        >
          <div className='flex items-center justify-between mb-6'>
            <h3 className='h3 text-navy'>Roadmap</h3>
            <Link className='text-blue font-semibold text-[13px] underline cursor-pointer'>
              View
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            {statuses.map((item, index) => (
              <div
                className='flex items-center justify-between text-gray'
                key={index}
              >
                <div className='flex items-center justify-center'>
                  <span
                    className={`h-2 w-2 rounded-full inline-block mr-4 ${
                      item.status === 'Planned'
                        ? 'bg-orange'
                        : item.status === 'In-Progress'
                        ? 'bg-purple'
                        : item.status === 'Live'
                        ? 'bg-lightBlue'
                        : ''
                    }`}
                  ></span>{' '}
                  {item.status}
                </div>
                <div className='font-bold'>{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
