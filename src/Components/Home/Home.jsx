import React from 'react';
import './Home.css';
import ReactCompareImage from 'react-compare-image';
import Frame_IMG from '../../Assets/Hero-Frame.png';
import Hero_IMG from '../../Assets/Hero.jpg';
import Art_IMG from '../../Assets/art.jpg';
import ProjectFrame from '../../Assets/ProjectFrame.png';
import Project from '../../Assets/project1.jpg';
import TransformationsFrame from '../../Assets/TransformationsFrame.png';
import TestimonialFrame from '../../Assets/TestimonialFrame.png';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Home() {
  const before =
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
  const after =
    "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

  return (
    <>
      <main className='main-Banner'>
        <div className="content container mx-auto flex">
          <div className="w-1/2 contentBox">
            <span className='tag'>Since 2005</span>
            <h2>Experience <span><b>Modern Luxury</b></span> in Architecture</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam hic blanditiis molestias rerum deleniti quidem non laudantium tempora a?</p>
            <button><i className="bi-arrow-right-circle-fill"></i><span>Get Started</span></button>
          </div>
          <div className="w-1/2">
            <div className="imgBox">
              <img src={Frame_IMG} alt="" className='Frame' />
              <img src={Hero_IMG} alt="" className='Hero' />
            </div>
          </div>
        </div>
      </main>
      <div className="container mx-auto">
        <div className="flex">
          <div className="box">
            <i className="bi-box-seam"></i>
            <div className="flex flex-col">
              <h6>Reasonable Prices</h6>
              <p>Quality desing at affordable rates.</p>
            </div>
          </div>
          <div className="box">
            <i className="bi-wallet2"></i>
            <div className="flex flex-col">
              <h6>Reasonable Prices</h6>
              <p>Quality desing at affordable rates.</p>
            </div>
          </div>
          <div className="box">
            <i className="bi-headphones"></i>
            <div className="flex flex-col">
              <h6>Reasonable Prices</h6>
              <p>Quality desing at affordable rates.</p>
            </div>
          </div>
        </div>
      </div>
      <section className='AboutUS container mx-auto'>
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <span className='tag'>ABOUT US</span>
            <h2>Turning <span>Your Dream Home</span> into Reality </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, porro facilis harum praesentium in illum.</p>

            <div className="flex">
              <div className="box flex-col">
                <h6>250+</h6>
                <p>Project Completed</p>
              </div>
              <div className="box flex-col">
                <h6>35+</h6>
                <p>Awards Gained</p>
              </div>
              <div className="box flex-col">
                <h6>99%</h6>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Services container mx-auto'>
        <div className="content">
          <span className='tag'>Our services</span>
          <h2>Explore Our Services:</h2>
          <div className="flex justify-between">
            <h2><span>Your Path to Success</span></h2>
            <button><i className="bi-arrow-right-circle-fill"></i><span>View All Services</span></button>
          </div>
        </div>
        <div className="flex content">
          <div className="boxs">
            <h6>Architectural Design</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={Art_IMG} alt="" />
            <i className="bi-arrow-up-right-circle-fill"></i>
          </div>
          <div className="boxs">
            <h6>Interior Design</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={Art_IMG} alt="" />
            <i className="bi-arrow-up-right-circle-fill"></i>
          </div>
          <div className="boxs">
            <h6>Hospitality Design</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={Art_IMG} alt="" />
            <i className="bi-arrow-up-right-circle-fill"></i>
          </div>
        </div>
      </section>
      <section className='Label'>
        <marquee behavior="" direction="">
          <div className="flex items-center	">
            <p>Residential Design</p> <span>*</span>
            <p>Commercial Design</p> <span>*</span>
            <p>Hospitality Design</p> <span>*</span>
            <p>Educational Architecher</p> <span>*</span>
          </div>
        </marquee>
      </section>
      <section className='OurWork container mx-auto'>
        <div className="content">
          <span className='tag'>Our Work Proccess</span>
          <h2>Our Work Process: <span>Crafting Architectural Excellence</span></h2>
        </div>
        <div className="flex pdBox">
          <div className="boxs">
            <div className="icon">
              <i className="bi-clipboard"></i>
              <div className="no">01</div>
            </div>
            <h6>Survey</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="boxs">
            <div className="icon">
              <i className="bi-clipboard"></i>
              <div className="no">01</div>
            </div>
            <h6>Survey</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="boxs">
            <div className="icon">
              <i className="bi-clipboard"></i>
              <div className="no">01</div>
            </div>
            <h6>Survey</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="boxs">
            <div className="icon iconLast">
              <i className="bi-clipboard"></i>
              <div className="no">01</div>
            </div>
            <h6>Survey</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
      <section className='Label'>
        <marquee behavior="" direction="">
          <div className="flex items-center	">
            <p>Residential Design</p> <span>*</span>
            <p>Commercial Design</p> <span>*</span>
            <p>Hospitality Design</p> <span>*</span>
            <p>Educational Architecher</p> <span>*</span>
          </div>
        </marquee>
      </section>
      <section className='OurProject container mx-auto'>
        <div className="pdBox">
          <span className="tag">Our Projects</span>
          <h2>Explore <span>Our Portfolio</span></h2>
          <div className="flex justify-between items-center">
            <h2>of Featured Projects</h2>
            <button><i className="bi-arrow-right-circle-fill"></i><span>View All Projects</span></button>
          </div>
        </div>
        <Tabs>
          <TabList className="pdBox">
            <Tab>Interior</Tab>
            <Tab>Exterior</Tab>
            <Tab>Residence</Tab>
            <Tab>Offices</Tab>
            <Tab>Kitchen</Tab>
            <Tab>Living Room</Tab>
            <Tab>Bed Room</Tab>
          </TabList>

          <TabPanel>
            <div className="flex pdBox">
              <div className="w-1/2">
                <div className="imgBox">
                  <img src={ProjectFrame} alt="" className='Frame' />
                  <img src={Project} alt="" className='projectIMG' />
                  <div className="Details">
                    <h4>Modern 4 BHK Apartment Interior Design</h4>
                    <button>2024</button>
                    <button>Apartment</button>
                    <button>Residential Design</button>
                  </div>
                  <i className="bi-arrow-up-right-circle-fill"></i>
                </div>
              </div>
              <div className="w-1/2">
                <div className="imgBox">
                  <img src={ProjectFrame} alt="" className='Frame' />
                  <img src={Project} alt="" className='projectIMG' />
                  <div className="Details">
                    <h4>Modern 4 BHK Apartment Interior Design</h4>
                    <button>2024</button>
                    <button>Apartment</button>
                    <button>Residential Design</button>
                  </div>
                  <i className="bi-arrow-up-right-circle-fill"></i>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex pdBox">
              <div className="w-1/2">
                <div className="imgBox">
                  <img src={ProjectFrame} alt="" className='Frame' />
                  <img src={Project} alt="" className='projectIMG' />
                  <div className="Details">
                    <h4>Modern 4 BHK Apartment Interior Design</h4>
                    <button>2024</button>
                    <button>Apartment</button>
                    <button>Residential Design</button>
                  </div>
                  <i className="bi-arrow-up-right-circle-fill"></i>
                </div>
              </div>
              <div className="w-1/2">
                <div className="imgBox">
                  <img src={ProjectFrame} alt="" className='Frame' />
                  <img src={Project} alt="" className='projectIMG' />
                  <div className="Details">
                    <h4>Modern 4 BHK Apartment Interior Design</h4>
                    <button>2024</button>
                    <button>Apartment</button>
                    <button>Residential Design</button>
                  </div>
                  <i className="bi-arrow-up-right-circle-fill"></i>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </section>
      <section className='Transformations'>
        <span className="tag">Before & After</span>
        <h2>See Our <span>Design</span></h2>
        <div className="flex justify-between">
          <h2><span>Transformations</span></h2>
          <button><i className="bi-arrow-right-circle-fill"></i><span>View All Projects</span></button>
        </div>
        <div className="IMGBOX">
          <img src={TransformationsFrame} alt="" className='Frame' />
          <div className="compare-container">
            <ReactCompareImage leftImage={before} rightImage={after} />
          </div>
        </div>
      </section>
      <section className='Testimonial'>
        <span className="tag">Testimonial</span>
        <h2>What <span>Our Client</span></h2>
        <div className="flex justify-between">
          <h2><span>Say About Us</span></h2>
          <button><i className="bi-arrow-right-circle-fill"></i><span>View All Testimonial</span></button>
        </div>
        <div className="IMGBOX">
          <img src={TestimonialFrame} alt="" className='Frame' />
        </div>
      </section>
      <section className="contact-us">
        <h1>CONTACT US</h1>
        <p>Get Your Free Quote Today!</p>
        <div className="address-container">
          <h3>Address</h3>
          <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
        </div>
        <form action="/submit_form" method="post">
          <div className="form-group">
            <label for="name">Your Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-gruppe">
            <label for="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label for="message">Your Message *</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-group">
            <h3>Open Time</h3>
            <p>Monday - Friday: 10:00-20:00<br /> Saturday Sunday: 11:00-18:00</p>
          </div>
          <div className="form-group">
            <h3>Stay Connected</h3>
            <p> </p>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  )
}
