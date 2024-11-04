
import React, { useState } from 'react';
import './App.css';
import demologo from '../src/assets/demo.png';
import { FaUser, FaPhone, FaEnvelope, FaComment } from 'react-icons/fa';
import {submitFormData} from '../src/api/apiService'

export const App = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formdata.name.trim()) {
      newErrors.name = 'Name is Required';
    } else if (formdata.name.trim().length <= 3) {
      newErrors.name = 'Name must be greater than 3 characters';
    }

    if (!formdata.mobile.trim() || !/^\d{10}$/.test(formdata.mobile)) {
      newErrors.mobile = 'Enter a 10-digit valid mobile Number';
    }

    if (!formdata.email.trim() || !/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Enter a Valid Email Address';
    }

    if (!formdata.message.trim()) {
      newErrors.message = 'Message cannot be Empty';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await submitFormData(formdata); //  API to submit form data
        alert('Form submission Successful');
        setErrors({});
        setFormdata({ name: '', mobile: '', email: '', message: '' }); 
      } catch (error) {
        alert('Failed to submit form. Please try again later.');
        console.error('Submission error:', error);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="profile-icon">
        <img src={demologo} alt="demo-icon" />
      </div>

      <h2 className="form-title">Get a Free Demo</h2>
      <p>Request your personalized live demo.</p>
      <div className="divider"></div>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            className={`form-control ${errors.name ? 'input-error' : ''}`}
            name="name"
            placeholder="Enter Your Name"
            value={formdata.name}
            onChange={handleInputChange}
          />
          <FaUser className="input-icon" />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className={`form-control ${errors.mobile ? 'input-error' : ''}`}
            name="mobile"
            placeholder="Enter Your Mobile Number"
            value={formdata.mobile}
            onChange={handleInputChange}
          />
          <FaPhone className="input-icon" />
          {errors.mobile && <div className="error-message">{errors.mobile}</div>}
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            className={`form-control ${errors.email ? 'input-error' : ''}`}
            name="email"
            placeholder="Enter Your Work Email"
            value={formdata.email}
            onChange={handleInputChange}
          />
          <FaEnvelope className="input-icon" />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input-wrapper">
          <textarea
            className={`form-control ${errors.message ? 'input-error' : ''}`}
            rows="3"
            placeholder="Message"
            name="message"
            value={formdata.message}
            onChange={handleInputChange}
          />
          <FaComment className="input-icon" />
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>

        <button type="submit" className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
};
