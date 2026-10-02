import React, { useState } from 'react';
import { FiCalendar, FiUser, FiMail, FiPhone } from 'react-icons/fi';

function ProfilesSettings() {
  const [dateValue, setDateValue] = useState('');

  const form = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
    { id: 'date', label: 'Date of Birth', type: 'date', placeholder: 'Enter your date of birth' }
  ];

  const formatDateInput = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDateValue(formatDateInput(value));
  };

  const handleDateIconClick = (fieldId) => {
    const input = document.getElementById(fieldId);
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };

  return (
    <>
      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold text-gray-900'>Profile Settings</h1>
        <p className='text-[14px] text-gray-500'>Update your personal information and account settings</p>
      </div>

      <div className='w-full border-b border-[#E5E7EB] my-[8px]' />

      <form action="" className='w-full grid grid-cols-1 gap-[22px] md:grid-cols-2 md:gap-[24px]'>
        {form.map((field) => (
          <div key={field.id} className='flex flex-col gap-[10px]'>
            <label htmlFor={field.id} className='text-[14px] font-bold text-gray-900'>{field.label}</label>
            <div className='flex justify-between items-center border-[1px] border-[#E5E7EB] px-[16px] bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all rounded-[12px]'>
              <input
                type={field.type === 'date' ? 'text' : field.type}
                name={field.id}
                id={field.id}
                value={field.id === 'date' ? dateValue : undefined}
                onChange={field.id === 'date' ? handleDateChange : undefined}
                placeholder={field.id === 'date' ? 'dd/mm/yyyy' : field.placeholder}
                className='h-[52px] rounded-[12px] w-full border-none outline-none focus:outline-none focus:ring-0 text-[18px] text-gray-900 placeholder:text-gray-400'
              />
              {field.id === 'name' && <FiUser className='text-gray-400 ml-2' />}
              {field.id === 'email' && <FiMail className='text-gray-400 ml-2' />}
              {field.id === 'phone' && <FiPhone className='text-gray-400 ml-2' />}
              {field.id === 'date' && (
                <button
                  type='button'
                  onClick={() => handleDateIconClick(field.id)}
                  className='ml-2 flex h-[32px] w-[32px] items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100'
                >
                  <FiCalendar className='text-gray-400' />
                </button>
              )}
            </div>
          </div>
        ))}
      </form>

      <div className='w-full border-b border-[#E5E7EB] my-[12px]' />

      <div className='flex w-full items-end justify-end gap-[16px] mt-[8px]'>
        <button className='font-bold py-[12px] px-[20px] rounded-[12px] transition border-[1px] border-[#E5E7EB] hover:bg-gray-100'>
          Cancel
        </button>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-[12px] px-[20px] rounded-[12px] transition'>
          Save Changes
        </button>
      </div>
    </>
  );
}

export default ProfilesSettings;