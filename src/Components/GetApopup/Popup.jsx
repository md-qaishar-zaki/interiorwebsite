import React, { useState } from 'react';
import './Popup.scss';

function Popup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
  });

  const totalSteps = 3;

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        const errorText = await response.text();
        alert(`Failed to submit the form: ${errorText}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form');
    }
  };
  
    

  return (
    <div className="form-wizard">
      <div className="steps">
        <ul>
          {[...Array(totalSteps)].map((_, index) => (
            <li
              key={index}
              className={currentStep >= index + 1 ? 'active' : ''}
              onClick={() => goToStep(index + 1)}
            >
              <span>{index + 1}</span>
              {['Create Account', 'Personal Info', 'Social Info', 'Finish'][index]}
            </li>
          ))}
        </ul>
      </div>

      <div className="myContainer">
        <form onSubmit={handleSubmit}>
          <div className={`form-container ${currentStep === 1 ? 'active' : ''}`}>
            <h2 className="text-center form-title">Personal Info</h2>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="button" className="btn btn-primary next" onClick={nextStep}>
                NEXT
              </button>
            </div>
          </div>

          <div className={`form-container ${currentStep === 2 ? 'active' : ''}`}>
            <div className="form-group">
              <input
                type="text"
                name="phoneNo"
                placeholder="Phone No."
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="button" className="btn btn-primary next" onClick={nextStep}>
                NEXT
              </button>
            </div>
          </div>

          <div className={`form-container ${currentStep === 3 ? 'active' : ''}`}>
            <h2 className="text-center form-title">Finish</h2>
            <div className="form-group">
              <h3 className="text-center">Thanks for Staying Tuned!</h3>
              <p className="text-center">
                Made by <a href="https://codepen.io/HanumanSahay/" target="_blank" rel="noopener noreferrer">@Hanuman Sahay</a>
              </p>
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="submit" className="btn btn-primary submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
