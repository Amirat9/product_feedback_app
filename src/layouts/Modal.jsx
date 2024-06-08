import Tag from '../components/Tag';
import { FaCircle } from 'react-icons/fa6';
const Modal = () => {
  const classifications = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  const status = [
    { status: 'Planned', count: 2 },
    { status: 'In-Progress', count: 3 },
    { status: 'Live', count: 1 },
  ];
  return (
    <div className='h-screen w-full z-10 absolute bg-black/35 sm:hidden'>
      <div className='relative w-full'>
        <div className='absolute right-0 top-0 w-3/4 h-screen bg-bg-color p-6 '>
          <div className='bg-white rounded-[10px] p-6 flex gap-x-2 gap-y-[14px] flex-wrap'>
            {classifications.map((classification) => (
              <Tag
                key={classification}
                type='classification'
              >
                <span>{classification}</span>
              </Tag>
            ))}
          </div>
          <div className='bg-white rounded-[10px] p-6 mt-6 '>
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
