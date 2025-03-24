import { useState } from 'react';
import { useFormStore } from '../../store/formStore';
import { useWindowSize } from '../../store/WindowContext';

export default function PersonalForm() {
  const { formData, updateFormData } = useFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  // const formatPhoneNumber = (value) => {
  //   // Remove all non-digit characters
  //   const cleaned = ('' + value).replace(/\D/g, '');
  //   // Match the cleaned input with the desired format
  //   const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  //   if (match) {
  //     const part1 = match[1] ? `(${match[1]}` : '';
  //     const part2 = match[2] ? `) ${match[2]}` : '';
  //     const part3 = match[3] ? `-${match[3]}` : '';
  //     return `${part1}${part2}${part3}`;
  //   }
  //   return value;
  // };

  // const handlePhoneChange = (event) => {
  //   const formattedPhoneNumber = formatPhoneNumber(event.target.value);
  //   setPhoneNumber(formattedPhoneNumber);
  // };

  return (
    <form className="form-personal-info">
      <h2 className="form-title">Personal Info</h2>
      <p className="form-sub-title">
        Please provide your name, email address, and phone number.
      </p>

      <div className="input-group">
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="input-container">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 1 234 567 890"
          />
        </div>
      </div>

      {/* {windowSizeChecker ? (
        ''
      ) : (
        <button className="button-next" onClick={handleNext}>
          Next Step
        </button>
      )} */}
    </form>
  );
}
