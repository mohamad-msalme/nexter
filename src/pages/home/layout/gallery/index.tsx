import React from 'react'

import './index.scss'

import img1 from 'assets/images/gal-1.jpeg'
import img2 from 'assets/images/gal-2.jpeg'
import img3 from 'assets/images/gal-3.jpeg'
import img4 from 'assets/images/gal-4.jpeg'
import img5 from 'assets/images/gal-5.jpeg'
import img6 from 'assets/images/gal-6.jpeg'
import img7 from 'assets/images/gal-7.jpeg'
import img8 from 'assets/images/gal-8.jpeg'
import img9 from 'assets/images/gal-9.jpeg'
import img10 from 'assets/images/gal-10.jpeg'
import img11 from 'assets/images/gal-11.jpeg'
import img12 from 'assets/images/gal-12.jpeg'
import img13 from 'assets/images/gal-13.jpeg'
import img14 from 'assets/images/gal-14.jpeg'

export const Gallery: React.FC = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img
          loading="lazy"
          src={img1}
          alt="Gallery image 1"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img
          loading="lazy"
          src={img2}
          alt="Gallery image 2"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          loading="lazy"
          src={img3}
          alt="Gallery image 3"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          loading="lazy"
          src={img4}
          alt="Gallery image 4"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img
          loading="lazy"
          src={img5}
          alt="Gallery image 5"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img
          loading="lazy"
          src={img6}
          alt="Gallery image 6"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img
          loading="lazy"
          src={img7}
          alt="Gallery image 7"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img
          loading="lazy"
          src={img8}
          alt="Gallery image 8"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img
          loading="lazy"
          src={img9}
          alt="Gallery image 9"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img
          loading="lazy"
          src={img10}
          alt="Gallery image 10"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img
          loading="lazy"
          src={img11}
          alt="Gallery image 11"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img
          loading="lazy"
          src={img12}
          alt="Gallery image 12"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img
          loading="lazy"
          src={img13}
          alt="Gallery image 13"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img
          loading="lazy"
          src={img14}
          alt="Gallery image 14"
          className="gallery__img"
        />
      </figure>
    </section>
  )
}
