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
import ContactFrame from '../../Assets/Contact-Frame.png';
import TeamFrame from '../../Assets/TeamFrame.png';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AboutIMG from '../../Assets/aboutIMG.png';


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
          <div className="w-1/2 relative">
            <div className="imgBox">
              <img src={Frame_IMG} alt="" className='Frame' />
              <img src={Hero_IMG} alt="" className='Hero' />
            </div>
          </div>
        </div>
      </main>
      <div className="container mx-auto threeBoxs">
        <div className="flex boxes">
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
      <section className='AboutUS'>
        <div className="container mx-auto flex AbousResposive">
          <div className="w-1/2 flex items-center	justify-center">
          <img src={AboutIMG} alt="" />
          </div>
          <div className="w-1/2 AboutBox">
            <div className="contentHeader">
              <span className='tag'>ABOUT US</span>
              <h2>Turning <span>Your Dream Home</span> into Reality </h2>
            </div>
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
      <section className='Services'>
        <div className="container mx-auto">
          <div className="content">
            <div className="contentHeader">
              <span className='tag'>Our services</span>
              <h2>Explore Our Services:</h2>
              <div className="flex justify-between">
                <h2><span>Your Path to Success</span></h2>
                <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>View All Services</span></button>
              </div>
            </div>
          </div>
          <div className="flex content AllBoxes">
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
        </div>
      </section>
      <section className='Label'>
        <div className="container mx-auto">
          <marquee behavior="" direction="">
            <div className="flex items-center	">
              <p>Residential Design</p> <span>*</span>
              <p>Commercial Design</p> <span>*</span>
              <p>Hospitality Design</p> <span>*</span>
              <p>Educational Architecher</p> <span>*</span>
            </div>
          </marquee>
        </div>
      </section>
      <section className='OurWork'>
        <div className="container mx-auto">
          <div className="content">
            <div className="contentHeader">
              <span className='tag'>Our Work Proccess</span>
              <h2>Our Work Process: <span>Crafting Architectural Excellence</span></h2>
            </div>
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
        </div>
      </section>
      <section className='Label'>
        <div className="container mx-auto">
          <marquee behavior="" direction="">
            <div className="flex items-center	">
              <p>Residential Design</p> <span>*</span>
              <p>Commercial Design</p> <span>*</span>
              <p>Hospitality Design</p> <span>*</span>
              <p>Educational Architecher</p> <span>*</span>
            </div>
          </marquee>
        </div>
      </section>
      <section className='OurProject'>
        <div className="container mx-auto">
          <div className="pdBox">
            <div className="contentHeader">
              <span className="tag">Our Projects</span>
              <h2>Explore <span>Our Portfolio</span></h2>
              <div className="flex justify-between items-center">
                <h2>of Featured Projects</h2>
                <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>View All Projects</span></button>
              </div>
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
        </div>
      </section>
      <section className='Transformations'>
        <div className="container mx-auto">
          <div className="contentHeader">
            <span className="tag">Before & After</span>
            <h2>See Our <span>Design</span></h2>
            <div className="flex justify-between">
              <h2><span>Transformations</span></h2>
              <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>View All Projects</span></button>
            </div>
          </div>
          <div className="IMGBOX">
            <img src={TransformationsFrame} alt="" className='Frame' />
            <Carousel infiniteLoop showIndicators={false} showThumbs={false} emulateTouch={false} swipeable={false}>
              <div className="IMGBOX">
                <img src={TransformationsFrame} alt="" className='Frame' />
                <div className="compare-container">
                  <ReactCompareImage leftImage={before} rightImage={after} />
                </div>
              </div>
              <div className="IMGBOX">
                <img src={TransformationsFrame} alt="" className='Frame' />
                <div className="compare-container">
                  <ReactCompareImage leftImage={before} rightImage={after} />
                </div>
              </div>
              <div className="IMGBOX">
                <img src={TransformationsFrame} alt="" className='Frame' />
                <div className="compare-container">
                  <ReactCompareImage leftImage={before} rightImage={after} />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className='Testimonial'>
        <div className="contentHeader">
          <span className="tag">Testimonial</span>
          <h2>What <span>Our Client</span></h2>
          <div className="flex justify-between">
            <h2><span>Say About Us</span></h2>
            <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>View All Testimonial</span></button>
          </div>
        </div>
        <div className="IMGBOX">
          <img src={TestimonialFrame} alt="" className='Frame' />
          <Carousel infiniteLoop showIndicators={false} showThumbs={false} emulateTouch={false} swipeable={false}>
            <div className="IMGBOX">
              <img src={TestimonialFrame} alt="" className='Frame' />
              <img src="https://via.placeholder.com/600x400" alt="Image 1" className='Imgs' />
            </div>
            <div className="IMGBOX">
              <img src={TestimonialFrame} alt="" className='Frame' />
              <img src="https://via.placeholder.com/600x400" alt="Image 1" className='Imgs' />
            </div>
            <div className="IMGBOX">
              <img src={TestimonialFrame} alt="" className='Frame' />
              <img src="https://via.placeholder.com/600x400" alt="Image 2" className='Imgs' />
            </div>
            <div className="IMGBOX">
              <img src={TestimonialFrame} alt="" className='Frame' />
              <img src="https://via.placeholder.com/600x400" alt="Image 3" className='Imgs' />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="contact-us container mx-auto">
        <div className="contentHeader">
          <span className="tag">CONTACT US</span>
          <h2>Get Your <span>Free Quote Today!</span></h2>
        </div>
        <div className="flex contactBoxs">
          <div className="w-1/2">
            <form action="/submit_form" method="post">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group w-full">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group w-full	">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>Send Message</span></button>
            </form>
          </div>
          <div className="w-1/2 padding">
            <div className="address-container" style={{ backgroundImage: `url(${ContactFrame}) ` }}>
              <div>
                <h3>Address</h3>
                <p>4517 Washington Ave. <br /> Manchester, Kentucky 39495</p>
              </div>
              <div className='py-4'>
                <h3>Contact</h3>
                <p>Phone: +91 00000000<br /> Email: support@gmail.com</p>
              </div>
              <div className='py-4'>
                <h3>Open Time</h3>
                <p>Monday - Friday: 10:00-20:00<br /> Saturday Sunday: 11:00-18:00</p>
              </div>
              <div className='py-4'>
                <h3>Stay Connected</h3>
                <div className="flex icons">
                  <i className="bi-facebook"></i>
                  <i className="bi-twitter"></i>
                  <i className="bi-instagram"></i>
                  <i className="bi-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OutTeam container mx-auto'>
        <div className="contentHeader">
          <span className="tag">Our team</span>
          <h2>Meet Our <span>Expert Team</span></h2>
        </div>
        <div className="flex TeamBoxs">
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={TeamFrame} alt="" />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={TeamFrame} alt="" />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={TeamFrame} alt="" />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
        </div>
      </section>
      <section className="Label">
        <marquee behavior="" direction="">
          <div className="flex items-center	">
            <p>Residential Design</p> <span>*</span>
            <p>Commercial Design</p> <span>*</span>
            <p>Hospitality Design</p> <span>*</span>
            <p>Educational Architecher</p> <span>*</span>
          </div>
        </marquee>
      </section>
    </>
  )
}
