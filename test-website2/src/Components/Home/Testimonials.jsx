
import React, { useState } from 'react';
import { testimonial } from '../data/testimonial';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonial.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonial.length - 1 : currentSlide - 1);
  };

  return (
    <div className="testimonial-slider">
      <div className="slider">
        {testimonial.map((item, index) => (
          <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
            <div className="card">
              <div className="circle-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FontAwesomeIcon className='font-awesome-left' icon={faChevronCircleLeft} onClick={prevSlide} />
      <FontAwesomeIcon className='font-awesome-right' icon={faChevronCircleRight} onClick={nextSlide} />
    </div>
  );
}

export default Testimonials;
