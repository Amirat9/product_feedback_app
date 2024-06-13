import PropTypes from 'prop-types';
import { useState } from 'react';
const Category = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={`text-[13px] font-semibold rounded-[10px] px-4 py-[6px] ${
        isClicked ? 'bg-blue text-white' : 'bg-backgroundColor text-blue'
      }  cursor-pointer hover:bg-[#CFD7FF]`}
      onClick={() => setIsClicked(!isClicked)}
    >
      {name}
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
