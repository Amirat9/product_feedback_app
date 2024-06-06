import PropTypes from 'prop-types';

const Stats = ({ status, count }) => {
  return (
    <div className='flex justify-between items-center'>
      <h4 className='flex items-center gap-2'>
        <span
          className={`${
            status === 'Planned'
              ? 'bg-orange'
              : status === 'In-Progress'
              ? 'bg-purple'
              : 'bg-lightBlue'
          } w-2 h-2 rounded-full inline-block`}
        ></span>
        {status}
      </h4>
      <p className='font-bold'>{count}</p>
    </div>
  );
};

Stats.propTypes = {
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Stats;
