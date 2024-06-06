import Tag from '../components/Tag';
import Stats from '../components/Stats';
const Sidebar = () => {
  // these need be managed in a state later
  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  const roadmap = [
    { status: 'Planned', count: 2 },
    { status: 'In-Progress', count: 3 },
    { status: 'Live', count: 1 },
  ];
  return (
    <aside className='w-full max-w-[255px]'>
      <div className='container flex flex-col gap-6'>
        <div className='bg-hero-desktop pt-[62px] pl-6 pb-6 rounded-2xl'>
          <h2 className='text-[20px] font-bold text-white'>Frontend Mentor</h2>
          <h4 className='text-[15px] font-medium text-white/75'>
            Feedback Board
          </h4>
        </div>
        <div className='bg-white py-6 pl-6 rounded-2xl'>
          <div className='flex flex-wrap gap-y-[14px] gap-2 text-tagText'>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className='bg-white py-6 px-6 rounded-2xl'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='text-lg text-navy font-bold'>Roadmap</h3>
            {/* make this a link with react router later */}
            <a href='/'>view</a>
          </div>
          <ul className='flex flex-col gap-y-2 text-body'>
            {roadmap.map((item, index) => (
              <li key={index}>
                <Stats
                  status={item.status}
                  count={item.count}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
