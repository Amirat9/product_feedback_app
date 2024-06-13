import { Link } from 'react-router-dom';
const RoadmapCard = () => {
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
  return (
    <div
      className={`bg-white p-6 rounded-[10px] w-full h-full flex-col flex-1 gap-6 hidden sm:flex`}
    >
      <div className='flex items-center justify-between '>
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
  );
};

export default RoadmapCard;
