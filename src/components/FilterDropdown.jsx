import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
const FilterDropdown = () => {
  const filters = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];
  const [filterSelected, setFilterSelected] = useState('Most Upvotes');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleItemClick = (filter) => {
    setFilterSelected(filter.target.innerText);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, [filterSelected]);
  return (
    <Menu>
      <MenuButton
        className={'text-white hover:opacity-75'}
        onClick={handleMenuClick}
      >
        <div className='flex justify-center items-center'>
          <p className='mr-2 text-[13px]'>
            sort by : <span className='font-bold'>{filterSelected}</span>
          </p>
          <FaChevronDown
            size={10}
            className={`${isMenuOpen ? 'hidden' : 'block'}`}
          />
          <FaChevronUp
            size={10}
            className={`${isMenuOpen ? 'block' : 'hidden'}`}
          />
        </div>
      </MenuButton>
      <MenuItems
        anchor='bottom-start'
        className='bg-white mt-6 flex flex-col rounded-[10px] shadow-md border-0 text-gray w-[255px]'
      >
        {filters.map((filter, index) => (
          <MenuItem key={index}>
            <button
              className='hover:text-purple border-[#979797]/35 border-b-[1px] py-3 px-6 text-left flex justify-between items-center'
              onClick={handleItemClick}
            >
              {filter}
              {filter === filterSelected && <FaCheck className='text-purple' />}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default FilterDropdown;
