import PropTypes from 'prop-types';
import { useState } from 'react';
const Tag = ({ children }) => {
  const [selected, setSelected] = useState(false);
  const handlClick = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`text-[13px] font-semibold px-4 py-[6px] rounded-xl ${
        selected ? 'bg-tagText text-white' : 'bg-tagPrimary'
      } cursor-pointer hover:bg-[#cfd7ff]`}
      onClick={handlClick}
    >
      {children}
    </div>
  );
};

Tag.children.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
