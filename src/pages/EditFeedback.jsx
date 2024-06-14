import { useNavigate } from 'react-router-dom';
import editFeedbackIcon from '../assets/shared/icon-edit-feedback.svg';
import { FaAngleLeft } from 'react-icons/fa6';
import InputField from '@/components/common/FormComponent/InputField';
import FormDropdown from '@/components/common/FormComponent/FormDropdown';
import ButtonGroup from '@/components/common/FormComponent/ButtonGroup';

const EditFeedback = () => {
  const navigate = useNavigate();

  return (
    <div className='px-6 pt-[34px] pb-[77px] flex flex-col gap-[55px] mx-auto sm:px-[114px] sm:pt-[56px] md:max-w-[540px] md:px-0'>
      {/* Navigation Link */}
      <div
        className='flex items-center gap-4 cursor-pointer'
        onClick={() => navigate(-1)}
      >
        <FaAngleLeft
          className='text-blue'
          size={11}
        />
        <div className='text-[13px] text-gray font-bold'>Go Back</div>
      </div>
      {/* Edit Feedback Card */}
      <section className='bg-white rounded-[10px] p-6 pt-11 relative sm:px-[42px]'>
        <div className='absolute top-[-2.1%] left-6 w-10 h-10 sm:w-14 sm:h-14 sm:left-[42px] sml:top-[-4.1%]'>
          <img
            src={editFeedbackIcon}
            alt='New Feedback Icon'
            className='h-full w-full object-cover'
          />
        </div>
        <h3 className='text-navy h3 mb-6'>Editing ‘Add a dark theme option’</h3>
        <form className='flex flex-col gap-6'>
          {/* Title input */}
          <InputField
            label='Feedback Title'
            description='Add a short, descriptive headline'
            id='title'
            type='text'
          />
          {/* Category Input */}
          <FormDropdown
            id='category'
            label='category'
            options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']}
            description='Choose a category for your feedback'
          />
          {/* Status Input */}
          <FormDropdown
            id='status'
            label='Update Status'
            description='Change feature state'
            options={['Suggestion', 'Planned', 'In-Progress', 'Live']}
          />

          {/* Description */}
          <InputField
            label='Feedback Detail'
            description='Include any specific comments on what should be improved, added,
              etc.'
            id='description'
            type='textarea'
          />
          {/* Buttons */}
          <ButtonGroup type='edit' />
        </form>
      </section>
    </div>
  );
};

export default EditFeedback;
