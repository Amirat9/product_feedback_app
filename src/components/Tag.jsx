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
    rounded-[10px] cursor-pointer hover:bg-[#cfd7ff] ${
      type === 'upvote'
        ? 'sm:flex sm:flex-col sm:justify-center sm:text-center sm:px-2'
        : ''
    } ${selected ? 'bg-blue text-white' : 'text-blue bg-bg-color'}`}
      onClick={handlClick}
    >
      {children}
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Tag;
