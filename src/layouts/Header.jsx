import suggestionsIcon from '../assets/suggestions/icon-suggestions.svg';
import FilterDropdown from '../components/FilterDropdown';
const Header = () => {
  return (
    <header className='bg-navy flex justify-between items-center px-6 py-2 sm:mt-10 sm:mx-10 sm:rounded-[10px] sm:px-3 sm:justify-normal md:mt-[94px] md:mx-0'>
      <div className='hidden sm:flex sm:items-center'>
        <img
          src={suggestionsIcon}
          alt='suggestions icon'
        />
        <h2 className='text-white font-bold text-[13px] ml-4 mr-[38px]'>
          6 Suggestions
        </h2>
      </div>
      <FilterDropdown />
      <button className='bg-purple border-0 text-white px-4 py-[10.5px] rounded-[10px] text-[13px] font-bold hover:bg-purple-hover sm:ml-auto'>
        + Add Feedback
      </button>
    </header>
  );
};

export default Header;
