

import './event.css';
import { useState, useEffect } from 'react';
import image1 from './assets/el tiro 2-min.jpg';
import image2 from './assets/el tiro 3-min.jpeg';
import image3 from './assets/el tiro 4-min.jpeg';


import image6 from './assets/bg.png';
import image7 from './assets/bg2.avif';
import image8 from './assets/bg3.jpg';
import image9 from './assets/bg4.jpeg';
import image10 from './assets/bg5.jpg';
import image11 from './assets/bk1.jpg';
import image12 from './assets/bk2.png';
import image13 from './assets/bk3.jpg';
import image14 from './assets/ai1.jpg';
import image15 from './assets/ai2.jpg';
import image16 from './assets/ai3.jpg';
import image17 from './assets/jw (2).jpeg';
import image18 from './assets/jw (1).jpeg';
import image19 from './assets/jw (3).jpeg';

import image20 from './assets/ct (1).jpg';
import image21 from './assets/ct (2).jpg';
import image22 from './assets/ct (3).jpg';

import image23 from './assets/ds (1).jpeg';
import image24 from './assets/ds (1).png';
import image25 from './assets/ds (2).png';

import image26 from './assets/tz (1).jpeg';
import image27 from './assets/tz (2).jpeg';
import image28 from './assets/tz (3).jpeg';


const Event1 = () => {
  
  const images = [
  { src: image2, text: 'Image 1: El-tiro Event' },
  { src: image1, text: 'Image 4: El-tiro Event' },
  { src: image3, text: 'Image 2: Exciting Events Await You!' },


  ];
  const images1 = [
    { src: image11, text: 'Image 1: El-tiro Event' },
    { src: image12, text: 'Image 4: El-tiro Event' },
    { src: image13, text: 'Image 2: Exciting Events Await You!' },
    
    ];

    const images2 = [
      { src: image14, text: 'Image 1: El-tiro Event' },
      { src: image15, text: 'Image 4: El-tiro Event' },
      { src: image16, text: 'Image 2: Exciting Events Await You!' },
      
      ];
    
      const images4 = [
        { src: image17, text: 'Image 1: El-tiro Event' },
        { src: image18, text: 'Image 4: El-tiro Event' },
        { src: image19, text: 'Image 2: Exciting Events Await You!' },
        
        ];
        const images5 = [
          { src: image20, text: 'Image 1: El-tiro Event' },
          { src: image21, text: 'Image 4: El-tiro Event' },
          { src: image22, text: 'Image 2: Exciting Events Await You!' },
          
          ];

          const images6 = [
            { src: image23, text: 'Image 1: El-tiro Event' },
            { src: image24, text: 'Image 4: El-tiro Event' },
            { src: image25, text: 'Image 2: Exciting Events Await You!' },
            
            ];
            const images7 = [
              { src: image26, text: 'Image 1: El-tiro Event' },
              { src: image27, text: 'Image 4: El-tiro Event' },
              { src: image28, text: 'Image 2: Exciting Events Await You!' },
              
              ];
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTextSection, setShowTextSection] = useState(false);
  const [lineVisible, setLineVisible] = useState(false); // State for line visibility
  const [scrollDirection, setScrollDirection] = useState(null); // Track scroll direction

  const handleNext = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const handleNext1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    };
  
  const handlePrev1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
    };

  const handleNext2 = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images2.length);
      };
    
    const handlePrev2 = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
      };
    
      const handleNext4 = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images4.length);
        };
      
      const handlePrev4 = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images4.length) % images4.length);
        };
  

  useEffect(() => {
  // Text Section Animation Trigger on Scroll
  const handleScroll = () => {
    const textSection = document.querySelector('.text-section');
    if (textSection && window.scrollY + window.innerHeight > textSection.offsetTop + 100) {
    setShowTextSection(true);
    }

    // Determine scroll direction
    if (window.scrollY > window.innerHeight / 2) {
    setLineVisible(true);
    setScrollDirection('down');
    } else {
    setScrollDirection('up');
    }
  };
  
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  }, []);

  return (
  <div className='app'>
    

    <div className='heading'>
    <div className="heading-animation">
     <h1 className='event45'> About All Events</h1>
    </div>
    </div>
    <div className="fest-container">
    
      <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
        <h1 className='el' ><img src={image6} alt="El-tiro Logo" className="logo-image" />El-tiro </h1>
       
        <p>
        El-tiro is an event under Tech-srijan, for all the tech enthusiasts to use their innovative and technical mind
        simultaneously and create a shooting mechanism from the best use of available resources.
        </p>
        <p>
        The aim of the event is to design a shooting mechanism consisting of at least three links, which can hit a target at
        a minimum distance of 5 meters. The participants will be provided with all the necessary knowledge, equipments of
        the workshop and proper assistance required for crafting their shooting mechanism.
        </p>
        {/* <p>
        The evaluation of the mechanism will be based on Functionality and reliability of mechanism, Originality/Degree of
        Innovation, Manufacturability, Feasibility and stability of mechanism, Scientific / Engineering basis of design,
        Cost and weight analysis.
        </p> */}
      </div>
      {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev}>
      &#8592;
      </button>
      <img src={images[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext}>
      &#8594;
      </button>
    </div>
    </div>

    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    <div className="fest-container">
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev1}>
      &#8592;
      </button>
      <img src={images5[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext1}>
      &#8594;
      </button>
    </div>
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image7} alt="El-tiro Logo" className="logo-image" />Cadathon</h1>
      
      <p>
      Bridgekriti is an event under Tech-srijan for all the people interested in designing bridges.
      </p>
      <p>
      The aim of the event is to design a through arch bridge of certain given specifications satisfying the stated constraints using popsicles (icecream sticks) and glue.
      </p>
      <p>
      The evaluation of the bridge will be based on the details of connections, members, the uniqueness of the design, its overall look and the total weight it can hold till the failure occurs.
      </p>
    </div>
    </div>
    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    <div className="fest-container">
    
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image7} alt="El-tiro Logo" className="logo-image" />Techczar</h1>
      
      <p>
      Bridgekriti is an event under Tech-srijan for all the people interested in designing bridges.
      </p>
      <p>
      The aim of the event is to design a through arch bridge of certain given specifications satisfying the stated constraints using popsicles (icecream sticks) and glue.
      </p>
      <p>
      The evaluation of the bridge will be based on the details of connections, members, the uniqueness of the design, its overall look and the total weight it can hold till the failure occurs.
      </p>
    </div>
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev1}>
      &#8592;
      </button>
      <img src={images7[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext1}>
      &#8594;
      </button>
    </div>
    </div>
    
    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    



    <div className="fest-container">
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev1}>
      &#8592;
      </button>
      <img src={images1[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext1}>
      &#8594;
      </button>
    </div>
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image7} alt="El-tiro Logo" className="logo-image" />Bridgekriti</h1>
      
      <p>
      Bridgekriti is an event under Tech-srijan for all the people interested in designing bridges.
      </p>
      <p>
      The aim of the event is to design a through arch bridge of certain given specifications satisfying the stated constraints using popsicles (icecream sticks) and glue.
      </p>
      <p>
      The evaluation of the bridge will be based on the details of connections, members, the uniqueness of the design, its overall look and the total weight it can hold till the failure occurs.
      </p>
    </div>
    </div>
    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    <div className="fest-container">
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image8} alt="El-tiro Logo" className="logo-image" /> Ab Initio</h1>
      
      <p>
      Ab-initio is an event under Tech-srijan for all the creative minds to think directly indirect and perform the simplest of tasks complicatedly.
      </p>
      <p>
      The aim of the event is to create a set up of minimum 15 steps to perform a certain task from the given set of situations. The basic necessities for the set up will be provided with the workshop throughout the preparation time.
      </p>
      <p>
      For the event, a maximum of 5 members team will be allowed. The evaluation of the mechanism will be based of the number of steps, innovation, feasibility and functionality of the steps.
      </p>
    </div>
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev2}>
      &#8592;
      </button>
      <img src={images2[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext2}>
      &#8594;
      </button>
    </div>
    </div>

    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    <div className="fest-container">
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev}>
      &#8592;
      </button>
      <img src={images6[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext}>
      &#8594;
      </button>
    </div>
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image9} alt="El-tiro Logo" className="logo-image" />DA-VINCI STUDIO</h1>
      
      <p>
      Wacky wires is an event under Tech-srijan for all the dare loving enthusiasts who never pass up a good game. It is an event to show and prove your steadiness and tenacity.
      </p>
      <p>
      The aim of the event is to pass the loop through peculiar turns and twists of the impish wire and win the glory. It will be a hand-eye coordination round where the player will hold a loop and pass the loop through a long, twisted wire from an initial point to the final point without touching the loop to the wire.
      </p>
      {/* <p>
      The evaluation of the participants will be based on the time and distance till which the loop passes without touching the wire. The farthest distance and shortest time will be preferred.
      </p> */}
    </div>
    </div>

    {/* Animated Line */}
    <hr className={`animated-line ${lineVisible ? (scrollDirection === 'down' ? 'line-visible' : 'line-visible-up') : ''}`} />

    <div className="fest-container">
    {/* Text Section */}
    <div className={`text-section ${showTextSection ? 'slide-in-text' : ''}`}>
    <h1 className='el' ><img src={image10} alt="El-tiro Logo" className="logo-image" /> Junkyard Warz</h1>
      
      <p>
      A fierce competition, junkyard warz is mainly for the sophomore year students, where they have to compete in the war zone, along with their teams and win the glory.
      </p>
      <p>
      The aim of the event is to scrap the best out of junk and transform it into a most effective mechanism.
      </p>
      {/* <p>
      The evaluation of the mechanism will be on the basis of feasibility and stability of mechanism, and the tasks performed with maximum efficiency. The rush, the excitement and the combat is worth all your attention.
      </p> */}
    </div>
    {/* Image Section */}
    <div className="image-section image-animation fade-in">
      <button className="nav-arrow left-arrow" onClick={handlePrev4}>
      &#8592;
      </button>
      <img src={images4[currentImageIndex].src} alt="Fest" className="fest-image" />
      <button className="nav-arrow right-arrow" onClick={handleNext4}>
      &#8594;
      </button>
    </div>
    </div>
  </div>
  );
}

export default Event1;