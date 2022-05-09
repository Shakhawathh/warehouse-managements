import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../image/banner.png.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Phone</h3>
                    <p>Advertising</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;