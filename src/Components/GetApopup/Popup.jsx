import React, { useState } from 'react';
import './Popup.scss';

function Popup() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const goToStep = (step) => {
    setCurrentStep(step);
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
        <div className={`form-container ${currentStep === 1 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Create Account</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-primary next" onClick={nextStep}>
                NEXT
              </button>
            </div>
          </form>
        </div>

        <div className={`form-container ${currentStep === 2 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Personal Info</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone No." />
            </div>
            <div className="form-group">
              <textarea placeholder="Address"></textarea>
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="button" className="btn btn-primary next" onClick={nextStep}>
                NEXT
              </button>
            </div>
          </form>
        </div>

        <div className={`form-container ${currentStep === 3 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Social Media Info</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Facebook" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Twitter" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Instagram" />
            </div>
            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="button" className="btn btn-primary next" onClick={nextStep}>
                NEXT
              </button>
            </div>
          </form>
        </div>

        <div className={`form-container ${currentStep === 4 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Finish</h2>
          <form>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
