import React, { useState } from 'react';
import './Popup.scss';


function Popup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', 
  });
  const totalSteps = 10;

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyAg9SPb3ev5ylpRNOur5WkgRsjEAGtKaxV2algvcM1Z-fWUyc6-fMAGbteXq9mH10HRA/exec';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append('age', formData.age ? 'Yes' : 'No');
    data.append('ex', formData.ex ? 'Yes' : 'No');

    fetch(scriptURL, { method: 'POST', body: data })
      .then((response) => {
        alert('Done', 'Submitted Successfully.', 'success');
      })
      .catch((error) => {
        alert('Error', 'Something went wrong. please try again!', 'error');
      });
  };

  return (

    <div className="form-wizard">
      <div className="steps">
        <ul>
          {[...Array(totalSteps)].map((_, index) => (
            <li
              key={index}
              className={currentStep >= index + 1 ? 'active' : ''}
              onClick={() => setCurrentStep(index + 1)}
            >
              <span>{index + 1}</span>
              {['', '', ''][index]}
            </li>
          ))}
        </ul>
      </div>

      <div className="myContainer">
        <form onSubmit={handleSubmit}>
          <div className={`form-container ${currentStep === 1 ? 'active' : ''}`}>
            <h2 className="text-center form-title">What type of interior service do you need?</h2>
            <div className="form-group">
              <input name="project-type" type="radio" id="complete-project" value="complete-project" />
              <label htmlFor="complete-project">Complete project - designing and installation</label>
            </div>
            <div className="form-group">
              <input name="project-type" type="radio" id="design-only" value="design-only" />
              <label htmlFor="design-only">Design only</label>
            </div>
            <div className="form-group">
              <input name="project-type" type="radio" id="installation-only" value="installation-only" />
              <label htmlFor="installation-only">Installation only</label>
            </div>
            <div className="form-group d-flex">
              <input name="project-type" type="radio" id="other" value="other" />
              <input type="text" placeholder="Other" aria-label="other" />
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
            <h2 className="text-center form-title">What type of project is it?</h2>
            <div className="form-group">
              <input name="property-type" type="radio" id="new-property" value="new-property" />
              <label htmlFor="new-property">New property</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="existing-property" value="existing-property" />
              <label htmlFor="existing-property">Existing property</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="other" value="other" />
              <label htmlFor="other">Other</label>
              <input type="text" placeholder="Other" aria-label="other" />
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
            <h2 className="text-center form-title">What kind of property is this for?</h2>
            <div className="form-group">
              <input name="property-type" type="radio" id="house" value="house" />
              <label htmlFor="house">House</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="flat" value="flat" />
              <label htmlFor="flat">Flat</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="commercial-premises" value="commercial-premises" />
              <label htmlFor="commercial-premises">Holiday home</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="shop" value="shop" />
              <label htmlFor="shop">Shop</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="office" value="office" />
              <label htmlFor="office">Office</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="clinic" value="clinic" />
              <label htmlFor="clinic">Clinic</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="restaurant-hotel" value="restaurant-hotel" />
              <label htmlFor="restaurant-hotel">Restaurant / hotel</label>
            </div>
            <div className="form-group">
              <input name="property-type" type="radio" id="other" value="other" />
              <label htmlFor="other">Other</label>
              <input type="text" placeholder="Other" aria-label="other" />
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

          <div className={`form-container ${currentStep === 4 ? 'active' : ''}`}>
            <h2 className="text-center form-title">How large is your property?</h2>
            <div className="form-group">
              <input name="room-type" type="radio" id="1-room-kitchen" value="1-room-kitchen" />
              <label htmlFor="1-room-kitchen">1 Room kitchen</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="1-bhk" value="1-bhk" />
              <label htmlFor="1-bhk">1 BHK</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="2-bhk" value="2-bhk" />
              <label htmlFor="2-bhk">2 BHK</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="3-bhk" value="3-bhk" />
              <label htmlFor="3-bhk">3 BHK</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="4-bhk" value="4-bhk" />
              <label htmlFor="4-bhk">4 BHK</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="more-than-4-rooms" value="more-than-4-rooms" />
              <label htmlFor="more-than-4-rooms">More than 4 rooms</label>
            </div>
            <div className="form-group">
              <input name="room-type" type="radio" id="other" value="other" />
              <label htmlFor="other">
                Other
                <input className="" type="text" placeholder="Other"/>
              </label>
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

          <div className={`form-container ${currentStep === 5 ? 'active' : ''}`}>
            <h2 className="text-center form-title">Which room(s) need improving?</h2>
            <div className="form-group">
              <label>
                <input type="checkbox" value="" />
                <span>This is a whole home design</span>
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" value="" />
                <span>Bathroom</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="bedroom-master" />
                <span>Bedroom</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="dining-room" />
                <span>Dining room</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="hallway" />
                <span>Hallway</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="home-office-study" />
                <span>Home office/Study</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="kitchen" />
                <span>Kitchen</span>
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" value="living-room" />
                <span>Living room</span>
              </label>
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

          <div className={`form-container ${currentStep === 6 ? 'active' : ''}`}>
            <h2 className="text-center form-title">What furniture would you like to include in the project?</h2>
            <div className="form-group">
              <label>
                <input type="checkbox" value="cot-s" />
                <span>Cot(s)</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="decor-items" />
                <span>Decor items</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="dining" />
                <span>Dining</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="kitchen-cabinets" />
                <span>Kitchen cabinets</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="sofa-s" />
                <span>Sofa(s)</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="study-unit" />
                <span>Study unit</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="tv-unit" />
                <span>TV unit</span>
              </label>
            </div>
            <div className="form-group">
              <label className="">
                <input type="checkbox" value="wardrobe-s" />
                <span>Wardrobe(s)</span>
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" value="other" />
                <span>
                  <input type="text" placeholder="Other" />
                </span>
              </label>
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

          <div className={`form-container ${currentStep === 7 ? 'active' : ''}`}>
            <h2 className="text-center form-title">What is your approx. budget for the project?</h2>
            <div className="form-group">
              <input name="less-than--1-lakh" type="radio" className="" value="" />
              <label>Less than ₹1 Lakh</label>
            </div>
            <div className="form-group">
              <input name="1-lakh-to--2-49-lakhs" type="radio" className="" value="" />
              <label>₹1 Lakh to ₹2.49 Lakhs</label>
            </div>
            <div className="form-group">
              <input name="2-5-lakhs-to--4-9-lakhs" type="radio" className="" value="" />
              <label>₹2.5 Lakhs to ₹4.9 Lakhs</label>
            </div>
            <div className="form-group" data-cy="5-lakhs-to--9-9-lakhs">
              <input name="5-lakhs-to--9-9-lakhs" type="radio" className="" value="" />
              <label>₹5 Lakhs to ₹9.9 Lakhs</label>
            </div>
            <div className="form-group" data-cy="10-lakhs-to--19-9-lakhs">
              <input name="10-lakhs-to--19-9-lakhs" type="radio" className="" value="" />
              <label>₹10 Lakhs to ₹19.9 Lakhs</label>
            </div>
            <div className="form-group">
              <input name="20-lakhs-to--29-9-lakhs" type="radio" className="" value="" />
              <label>₹20 Lakhs to ₹29.9 Lakhs</label>
            </div>
            <div className="form-group">
              <input name="30-lakhs-or-more" type="radio" className="" value="" />
              <label>₹30 Lakhs or more</label>
            </div>
            <div className="form-group">
              <input name="i-would-like-to-discuss-with-the-pro" type="radio" className="" value="" />
              <label>I would like to discuss with the pro</label>
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

          <div className={`form-container ${currentStep === 8 ? 'active' : ''}`}>
            <h2 className="text-center form-title">Would you consider online design services?</h2>
            <div className="form-group">
              <input name="yes" type="radio" className="" value="" />
              <label>Yes</label>
            </div>
            <div className="form-group">
              <input name="no" type="radio" className="" value="" />
              <label>No</label>
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

          <div className={`form-container ${currentStep === 9 ? 'active' : ''}`}>
            <h2 className="text-center form-title">How likely are you to make a hiring decision?</h2>
            <div class="form-group">
              <input name="im-ready-to-hire-now" type="radio" class="" value="" />
              <label>I'm ready to hire now</label>
            </div>
            <div class="form-group">
              <input name="im-definitely-going-to-hire-someone" type="radio" class="" value="" />
              <label>I'm definitely going to hire someone</label>
            </div>
            <div class="form-group">
              <input name="im-likely-to-hire-someone" type="radio" class="" value="" />
              <label>I'm likely to hire someone</label>
            </div>
            <div class="form-group">
              <input name="i-will-possibly-hire-someone" type="radio" class="" value="" />
              <label>I will possibly hire someone</label>
            </div>
            <div class="form-group">
              <input name="im-planning-and-researching" type="radio" class="" value="" />
              <label>I'm planning and researching</label>
            </div>
            <div class="form-group">
              <input name="other" type="radio" class="" value="" />
              <label>
                <input type="text" placeholder="Other" value="" />
              </label>
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

          <div className={`form-container ${currentStep === 10 ? 'active' : ''}`}>
            <h2 className="text-center form-title">Where do you need the Interior Designer?</h2>
            <div class="form-group">
                <input name="autocomplete" id="autocomplete" type="text" placeholder="Enter your postcode or town" value="" />
             </div>

            <div className="form-group text-center mar-b-0">
              <button type="button" className="btn btn-default back" onClick={prevStep}>
                BACK
              </button>
              <button type="submit" className="btn btn-primary next">
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









// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Form with Bootstrap</title>
//   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> 
//   <style>
//     .form-container {
//       max-width: 500px;
//       margin: auto;
//       margin-top: 50px;
//       padding: 20px;
//       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//       background-color: #fff;
//     }
//   </style>
// </head>

// <body class="bg-light">
//   <div class="container">
//     <div class="form-container">
//       <h4 class="text-center mb-4">Form Submission to Google Sheet</h4>
//       <form id="submit-to-google-sheet">
//         <div class="form-group">
//           <label for="name">Name:</label>
//           <input class="form-control" type="text" name="name" id="name" placeholder="Name" required />
//         </div>
//         <div class="form-group">
//           <label for="email">Email:</label>
//           <input class="form-control" type="email" name="email" id="email" placeholder="Email" required />
//         </div>
//         <div class="form-group">
//           <label for="slip">Contact Number:</label>
//           <input class="form-control" type="text" name="contact_number" id="contact_number" placeholder="Contact Number"
//             required />
//         </div>

//         <div class="form-group">
//           <label for="loc">Gender:</label>
//           <select class="form-control" name="gender" id="gender" required>
//             <option value="" disabled selected hidden>Choose...</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div class="form-group">
//           <label for="loc">Message:</label>
//           <textarea class="form-control" name="message" id="message" placeholder="Message" required></textarea>
//           <div class="form-group form-check mt-2">
//             <input class="form-check-input" type="checkbox" id="age" />
//             <label class="form-check-label" for="age">Check if you are over 18 years old</label>
//           </div>
//           <div class="form-group form-check">
//             <input class="form-check-input" type="checkbox" id="ex" required />
//             <label class="form-check-label" for="ex">By checking this box I certify that I am agree with the data
//               terms and policies.
//             </label>
//           </div>
//           <button type="submit" class="btn btn-primary btn-block">
//             Submit
//           </button>
//       </form>
//     </div>
//   </div>

//   <script>
//     const scriptURL =
//       "https://script.google.com/macros/s/AKfycbyAg9SPb3ev5ylpRNOur5WkgRsjEAGtKaxV2algvcM1Z-fWUyc6-fMAGbteXq9mH10HRA/exec";
//     const form = document.forms["submit-to-google-sheet"];
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       var formData = new FormData(form);
//       var ex = document.getElementById("ex").checked;
//       var age = document.getElementById("age").checked;

//       if (age) {
//         formData.append("age", "Yes");
//       } else {
//         formData.append("age", "No");
//       }
//       if (ex) {
//         formData.append("ex", "Yes");
//       } else {
//         formData.append("ex", "No");
//       }

//       fetch(scriptURL, { method: "POST", body: formData })
//         .then((response) => {
//           swal("Done", "Submitted Successfully.", "success");
//         })
//         .catch((error) => {
//           swal("Error", "Something went wrong. please try again!", "error");
//         });
//     });
//   </script>
// </body>

// </html>