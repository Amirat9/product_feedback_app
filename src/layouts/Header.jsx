import suggestionsIcon from '../assets/suggestions/icon-suggestions.svg';
import arrowDown from '../assets/shared/icon-arrow-down.svg';

const Header = () => {
  return (
    <header className='bg-navy rounded-2xl text-white'>
      <div className='container flex justify-between items-center px-4 py-[14px]'>
        <div className='flex items-center justify-center'>
          <div className='ml-2'>
            <img
              src={suggestionsIcon}
              alt=''
            />
          </div>
          <div className='ml-4 mr-2 text-lg font-bold'>6 suggestions</div>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn m-1 bg-transparent text-white text-sm font-normal hover:bg-transparent border-none'
            >
              Sort by : Most Upvotes{' '}
              <span>
                <img
                  src={arrowDown}
                  alt='dropdown icon'
                  color='white'
                />
              </span>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-white
            rounded-box w-52 hover:bg-transparent'
            >
              <li>
                <a>Most Upvotes</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className='btn bg-purple text-[#f2f4fe] font-semibold text-sm border-none px-[24px] py-[12px] hover:bg-[#c75af6]
          '
          >
            + Add Feedback
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
