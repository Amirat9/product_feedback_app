import { useState } from 'react';
import Tag from '../components/Tag';
import Stats from '../components/Stats';
import { FaBars, FaX, FaCircle } from 'react-icons/fa6';
const Sidebar = () => {
  // these need be managed in a state later
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuCLick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const classifications = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  const status = [
    { status: 'Planned', count: 2 },
    { status: 'In-Progress', count: 3 },
    { status: 'Live', count: 1 },
  ];
  return (
    <aside className='sm:flex sm:gap-[10px]  sm:max-h-[176px] md:flex-col  md:mx-0 md:max-w-[255px]'>
      <div className='bg-hero-mobile bg-center bg-cover bg-no-repeat px-6 py-4 text-white flex justify-between items-center sm:bg-hero-tablet sm:items-end sm:flex-1 sm:rounded-[10px] md:bg-hero-desktop'>
        <div className='sm:text-left md:pt-[62px]'>
          <h2 className='h4 sm:h2'>Frontend Mentor</h2>
          <h4 className='text-[13px] opacity-75 sm:text-[15px] sm:font-medium'>
            Feedback Board
          </h4>
        </div>
        <div className='sm:hidden'>
          <FaBars
            size={20}
            className={isMenuOpen ? 'hidden' : 'block'}
            onClick={handleMenuCLick}
          />
          <FaX
            size={20}
            className={isMenuOpen ? 'block' : 'hidden'}
            onClick={handleMenuCLick}
          />
        </div>
      </div>
      <div className='bg-white rounded-[10px] p-6  gap-x-2 gap-y-[14px] flex-wrap hidden sm:flex-1 sm:flex'>
        {classifications.map((classification) => (
          <Tag
            key={classification}
            type='classification'
          >
            <span>{classification}</span>
          </Tag>
        ))}
      </div>
      <div className='bg-white rounded-[10px] p-6 mt-6 hidden sm:block sm:flex-1 sm:mt-0'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='h3'>Roadmap</h3>
          <a href='/'>View</a>
        </div>
        <div className='flex flex-col gap-2'>
          {status.map((item, index) => (
            <div
              className='flex justify-between items-center'
              key={index}
            >
              <div className='flex justify-center items-center'>
                <FaCircle
                  color={`${
                    item.status === 'Planned'
                      ? '#F49F85'
                      : item.status === 'In-Progress'
                      ? '#AD1FEA'
                      : '#62BCFA'
                  }`}
                  className='mr-2'
                  size={8}
                />
                <p className='text-gray'>{item.status}</p>
              </div>
              <p className='text-gray font-bold'>{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
