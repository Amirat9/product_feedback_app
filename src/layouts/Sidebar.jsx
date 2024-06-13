import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/common/CategoryCard';
import RoadmapCard from '@/components/common/RoadmapCard';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../assets/shared/mobile/icon-close.svg';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <aside className='sm:flex sm:items-center h-fit sm:gap-[10px] lg:max-w-[255px] lg:flex-col'>
      <div className='flex items-center justify-between bg-purple px-6 py-4 bg-hero-mobile bg-cover bg-center bg-no-repeat sm:bg-hero-tablet sm:pl-6 sm:pb-6 sm:rounded-[10px] sm:h-full sm:flex-1 sm:items-end lg:w-full lg:pt-[62px] lg:bg-hero-desktop'>
        <div>
          <h2 className='text-white text-[15px] font-bold tracking-[-0.19px] sm:h2'>
            Frontend Mentor
          </h2>
          <h4 className='text-[13px] opacity-75 text-white sm:text-[15px]'>
            Feedback Board
          </h4>
        </div>
        <Button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          className='bg-transparent hover:bg-transparent focus:outline-none sm:hidden'
        >
          <img
            src={isMenuOpen ? iconClose : iconHamburger}
            alt={isMenuOpen ? 'Close Menu Icon' : 'Hamburger Menu Icon'}
          />
        </Button>
      </div>
      <CategoryCard />
      <RoadmapCard />
    </aside>
  );
};

export default Sidebar;
