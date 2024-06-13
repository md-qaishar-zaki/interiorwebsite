import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-2/6">
              <h6>Logo</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis reprehenderit magnam provident porro?</p>
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <div className="w-4/6">
              <div className="flex">
                <div className="w-1/4 px-2">
                  <h6>Company</h6>
                  <ul>
                    <li>Our Team</li>
                    <li>Pricing</li>
                    <li>Services</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="w-1/4 px-2">
                  <h6>Contact</h6>
                  <ul>
                    <li>+91 00000000</li>
                    <li>Another@gmail.com</li>
                    <li>Kolkata New Town 700161</li>
                  </ul>
                </div>
                <div className="w-2/4 px-8">
                  <h6>Get the letest information</h6>
                  <form action="" className='flex'>
                    <input type="email" placeholder='Email address' />
                    <i className="bi-arrow-right-square-fill"></i>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex downFooter">
            <h2>Copyright 2024 <span>Arch Studio.</span> All Rights Reserved.</h2>
            <h2>User Terms & Condition | Privacy Policy</h2>
          </div>
        </div>
      </footer>
    </>
  )
}
