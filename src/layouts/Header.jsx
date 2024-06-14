import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import suggestionsIcon from '../assets/suggestions/icon-suggestions.svg';
import iconCheck from '../assets/shared/icon-check.svg';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const Header = () => {
  const filters = [
    'Most Comments',
    'Least Comments',
    'Most Upvotes',
    'Least Upvotes',
  ];
  const [filter, setFilter] = useState('Most Comments');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFilterChange = (filterItem) => {
    setFilter(filterItem);
    setIsMenuOpen(false); // Close the menu after selecting a filter
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='bg-navy px-6 py-2 sm:px-3 sm:py-[14px] sm:rounded-[10px] lg:w-full lg:max-h-[72px]'>
      <div className='flex items-center'>
        <div className='hidden items-center justify-center gap-4 text-white mr-[38px] sm:flex'>
          <img
            src={suggestionsIcon}
            alt='Suggestions Icon'
          />
          <h3 className='h3'>6 Suggestions</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className='text-[13px] font-bold text-[#F2F4FE] sm:text-sm sm:flex-none'
            onClick={toggleMenu}
          >
            <div className='flex items-center gap-2'>
              <span className='font-normal'>sort by : </span>
              {` ${filter}`}
              {isMenuOpen ? (
                <FaAngleUp className='block' />
              ) : (
                <FaAngleDown className='block' />
              )}
            </div>
          </DropdownMenuTrigger>
          {isMenuOpen && (
            <DropdownMenuContent
              onInteractOutside={() => setIsMenuOpen(!isMenuOpen)}
              align='start'
              className='mt-4'
            >
              {filters.map((filterItem, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleFilterChange(filterItem)}
                  className={
                    'text-gray cursor-pointer hover:text-purple hover:bg-none focus:bg-transparent focus:text-purple'
                  }
                >
                  <div
                    className={`flex items-center justify-between w-full px-6 py-3 gap-10 ${
                      index != 0 ? 'border-t border-[#979797]/35' : ''
                    }`}
                  >
                    {filterItem}
                    {filterItem === filter && (
                      <img
                        src={iconCheck}
                        alt='Check Icon'
                        className='block'
                      />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
        <Button className='bg-purple ml-auto rounded-[10px] sm:px-6 hover:bg-purpleHover'>
          <Link to='/new-feedback'>+ Add Feedback</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
