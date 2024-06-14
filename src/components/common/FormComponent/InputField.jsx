import PropTypes from 'prop-types';
const InputField = ({ label, description, type, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='h4 text-navy mb-1'
      >
        {label}
      </label>
      <p className='text-gray text-[13px] mb-4'>{description}</p>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={3}
          className='bg-backgroundColor text-navy text-[13px] rounded-[5px] resize-none w-full px-6 py-4 sm:text-[15px] focus:outline-blue focus:outline-1 focus:outline'
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className='bg-backgroundColor rounded-[5px] p-4 w-full text-navy focus:outline-blue focus:outline-1 focus:outline'
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default InputField;
