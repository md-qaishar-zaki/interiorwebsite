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
import TestimonialIMG from '../../Assets/TestimonialIMG.png';
import ContactFrame from '../../Assets/Contact-Frame.png';
import TeamFrame from '../../Assets/TeamFrame.png';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AboutIMG from '../../Assets/aboutIMG.png';
import OneTeam from '../../Assets/1team.png';
import TwoTeam from '../../Assets/2team.png';
import ThreeTeam from '../../Assets/3team.png';
import ww from '../../Assets/After_&_Before/After_1.jpg'


export default function Home() {
  const images = [
    { before: require('../../Assets/After_&_Before/Before_1.jpg'), after: require('../../Assets/After_&_Before/After_1.jpg') },
    { before: require('../../Assets/After_&_Before/Before_2.jpg'), after: require('../../Assets/After_&_Before/After_2.jpg') },
    { before: require('../../Assets/After_&_Before/Before_3.jpg'), after: require('../../Assets/After_&_Before/After_3.jpg') },
    { before: require('../../Assets/After_&_Before/Before_4.jpg'), after: require('../../Assets/After_&_Before/After_4.jpg') },
    { before: require('../../Assets/After_&_Before/Before_5.jpg'), after: require('../../Assets/After_&_Before/After_5.jpg') },
    // Add more images as needed
  ];
  return (
    <>
      <main className='main-Banner'>
        <div className="content container mx-auto flex">
          <div className="w-1/2 contentBox">
            <span className='tag'>Since 2021</span>
            <h2>Your Home <span><b>Our</b></span> creations</h2>
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
      <section id='About' className='AboutUS'>
        <div className="container mx-auto threeBoxs">
          <div className="flex boxes">
            <div className="box">
              <i className="bi-box-seam"></i>
              <div className="flex flex-col">
                <h6>Affordable price</h6>
                <p>Bringing Harmony Home with Vastu Expertise at Affordable Prices</p>
              </div>
            </div>
            <div className="box">
              <i className="bi-wallet2"></i>
              <div className="flex flex-col">
                <h6>Innovative design</h6>
                <p>Innovative Designs Crafted to Elevate Your Space with Timeless Harmony.</p>
              </div>
            </div>
            <div className="box">
              <i className="bi-headphones"></i>
              <div className="flex flex-col">
                <h6>Vastu Expertise</h6>
                <p>Vastu Expertise aligns your space with Vastu principles for harmony and balance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex AbousResposive">
          <div className="w-1/2 flex items-center	justify-center">
            <img src={AboutIMG} alt="" />
          </div>
          <div className="w-1/2 AboutBox">
            <div className="contentHeader">
              <span className='tag'>ABOUT US</span>
              <h2>Turning <span>Your Dream Home</span> into Reality </h2>
            </div>

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
          <div className="flex content AllBoxes pt-2">
            <div className="boxs">
              <h6>Educational Commercial</h6>
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
              <h6>Discussion Meeting</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="boxs">
              <div className="icon">
                <i className="bi-clipboard"></i>
                <div className="no">01</div>
              </div>
              <h6>2D+3D Design</h6>
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
              <h6>Residencial Interior Design</h6>
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
      <section id='Project' className='OurProject'>
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
            <h2>See Our <span>Design Transformations</span></h2>
          </div>
          <div className="IMGBOX">
            <img src={TransformationsFrame} alt="" className='Frame' />
            <Carousel infiniteLoop showIndicators={false} showThumbs={false} emulateTouch={false} swipeable={false}>
              {images.map((imagePair, index) => (
                <div className="IMGBOX" key={index}>
                  <img src={TransformationsFrame} alt="" className='Frame' />
                  <div className="compare-container">
                    <ReactCompareImage leftImage={imagePair.before} rightImage={imagePair.after} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section id='Contact' className="contact-us container mx-auto">
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
            <div className="imgBox w-full">
              <img src={ContactFrame} alt="" className='projectIMG' />
              <div className="address-container">
                <div>
                  <h3>Address</h3>
                  <p>Shop No. 8, Laxmi Narayan Apt Opp.<br /> Fish Market, Vangaon Tal-Dahanu,<br /> Mumbai, Maharashtra 401103</p>
                </div>
                <div className='py-2'>
                  <h3>Contact</h3>
                  <p>Phone: +91 7977523087<br /> Email: pragatisinterio@gmail.com</p>
                </div>
                <div className='py-2'>
                  <h3>Open Time</h3>
                  <p>Monday - Friday: 10:00-20:00<br /> Saturday Sunday: 11:00-18:00</p>
                </div>
                <div className='py-2'>
                  <h3>Stay Connected</h3>
                  <div className="flex icons">
                    <i className="bi-facebook"></i>
                    <i className="bi-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OutTeam container mx-auto hidden'>
        <div className="contentHeader">
          <span className="tag">Our team</span>
          <h2>Meet Our <span>Expert Team</span></h2>
        </div>
        <div className="flex TeamBoxs">
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={OneTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
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
              <img src={TwoTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
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
              <img src={ThreeTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
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
