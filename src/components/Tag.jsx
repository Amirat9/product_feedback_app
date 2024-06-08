import PropTypes from 'prop-types';
import { useState } from 'react';
const Tag = ({ children, type }) => {
  const [selected, setSelected] = useState(false);
  const handlClick = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`text-[13px] font-semibold py-[6px] px-4 inline-block  
    rounded-[10px] cursor-pointer hover:bg-[#cfd7ff] sm:flex sm:flex-col ${
      selected ? 'bg-blue text-white' : 'text-blue bg-bg-color'
    }`}
      onClick={handlClick}
    >
      {children}
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
