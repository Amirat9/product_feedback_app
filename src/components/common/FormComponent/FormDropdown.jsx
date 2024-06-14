import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import checkIcon from '@/assets/shared/icon-check.svg';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';

const FormDropdown = ({ label, id, options, description }) => {
  const componentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update width
    const updateWidth = () => {
      if (componentRef.current) {
        const newWidth = componentRef.current.getBoundingClientRect().width;
        setWidth(newWidth);
      }
    };

    // Initial width calculation
    updateWidth();

    // Add event listener to update width on window resize
    window.addEventListener('resize', updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div>
      {/* Label of the menu */}
      <label
        htmlFor={id}
        className='h4 text-navy mb-1'
      >
        {label}
      </label>
      <p className='text-gray text-[13px] mb-4'>{description}</p>
      {/* Dropdown menu */}
      <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
        <DropdownMenuTrigger
          className={`bg-backgroundColor flex items-center justify-between w-full text-navy text-[13px] rounded-[5px] p-4 ${
            isOpen ? 'outline outline-1 outline-blue' : ''
          } focus:outline-blue focus:outline-1 focus:outline`}
          ref={componentRef}
          id={id}
        >
          <div>{selectedOption}</div>
          {isOpen ? <FaAngleUp color='blue' /> : <FaAngleDown color='blue' />}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ width: `${width}px` }}
          className='bg-white rounded-[10px] shadow-xl mt-4'
          align='start'
        >
          {/* Maps through the options for the menu */}
          {options.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className='px-6 py-3 text-gray border-b border-[#979797]/15 cursor-pointer hover:text-purple focus:text-purple focus:bg-transparent'
              onSelect={() => setSelectedOption(option)}
            >
              <div className='flex items-center justify-between w-full'>
                <div>{option}</div>
                {selectedOption === option && (
                  <div>
                    <img
                      src={checkIcon}
                      alt='check icon'
                    />
                  </div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

FormDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default FormDropdown;
