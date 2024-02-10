import React from 'react'
import Carousel from './Carousel'

const Gallery = () => {
  const imageUrls = [
    '/images/babies.jpg',
    '/images/use4.jpg',
    '/images/aanew2.jpeg',
    '/images/use1.JPEG',
    '/images/use2.JPEG',
    '/images/use3.JPEG',
    '/images/baby.jpg',
    '/images/use5.jpg',
    '/images/aanew1.jpg',
    '/images/fall1.jpg',
    '/images/aanew3.jpeg',
    '/images/group1.jpg',
    '/images/group2.jpg',
    '/images/group3.jpg',
    '/images/group6.jpg',
    '/images/run.jpg',
    '/images/promo.jpg',
    '/images/smile.jpg',
  ];

  return (
    <section className='bg-sky-600 pt-10 w-screen'>
      <div className="w-screen py-4">
    
      <Carousel images={imageUrls} />
      </div>
    </section>
  );
};

export default Gallery