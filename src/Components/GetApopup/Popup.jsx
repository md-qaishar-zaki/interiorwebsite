import React, { useState } from 'react';
import './Popup.scss';

export default function Popup() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-main">
      <div className="main-wrapper">
        <h2 className="form-head">Contact Form</h2>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-card">
            <input className="form-input" type="text" name="full_name" required="required"
              value={formData.full_name} onChange={handleChange} />
            <label className="form-label" htmlFor="full_name">Full Name</label>
          </div>

          <div className="form-card">
            <input className="form-input" type="email" name="email" required="required"
              value={formData.email} onChange={handleChange} />
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-card">
            <input className="form-input" type="number" name="phone_number" required="required"
              value={formData.phone_number} onChange={handleChange} />
            <label className="form-label" htmlFor="phone_number">Phone number</label>
          </div>

          <div className="form-card">
            <textarea className="form-textarea" maxLength="420" rows="3" name="address" required="required"
              value={formData.address} onChange={handleChange}></textarea>
            <label className="form-textarea-label" htmlFor="address">Address</label>
          </div>
          <div className="btn-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
