import { useState } from 'react';
import img1 from './5.webp';
import img2 from './7.jpg';

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      imageUrl: img1,
      title: 'Society of Automotive Engineers',
      content: 'A society belongs to smart mind of mmmut',
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2024/02/02/14/27/ai-generated-8548258_640.jpg',
        title: 'What it Brings to You',
        content: 'This society brings too many opportunities for you to bring your inner talent out and sharpen your minds. We welcome you with our open hearts.',
      },
    {
        imageUrl: img2,
        title: 'make memories with us',
        content: 'Enjoy the events we offer with energy. Hope we will be able to make a diffrence in your life',
      },
    
    // ... Add more slides here
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (<>
    <section className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item ${currentIndex === index ? 'active' : ''}`}
          >
            <div className="image" style={{ '--url': `url(${slide.imageUrl})` }} />
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
        <button className='scrollbtn1'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg></button>
        </button>
        <button id="next" onClick={handleNext}>
          <button className='scrollbtn1'>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg></button>
        </button>
      </div>
    </section>
    
    </>
  );
  

};

export default SliderComponent;