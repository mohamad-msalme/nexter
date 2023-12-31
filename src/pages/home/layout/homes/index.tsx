import React from 'react'

import './index.scss'

import house1 from 'assets/images/house-1.jpeg'
import house2 from 'assets/images/house-2.jpeg'
import house3 from 'assets/images/house-3.jpeg'
import house4 from 'assets/images/house-4.jpeg'
import house5 from 'assets/images/house-5.jpeg'
import house6 from 'assets/images/house-6.jpeg'
import { Card } from './Cards'

export type TCardData = {
  name: string
  location: string
  rooms: number
  area: number
  price: string
  imgSrc: string
  index?: number
}

const cardData: TCardData[] = [
  {
    name: 'Beautiful Familiy House',
    location: 'USA',
    rooms: 5,
    area: 325,
    price: '1,200,000',
    imgSrc: house1
  },
  {
    name: 'Modern Glass Villa',
    location: 'Canada',
    rooms: 3,
    area: 225,
    price: '1,100,000',
    imgSrc: house2
  },
  {
    name: 'Cozy Country House',
    location: 'Qatar',
    rooms: 2,
    area: 305,
    price: '1,400,000',
    imgSrc: house3
  },
  {
    name: 'Large Rustical Villa',
    location: 'Germany',
    rooms: 12,
    area: 965,
    price: '2,200,000',
    imgSrc: house4
  },
  {
    name: 'Majestic Palace House',
    location: 'USA',
    rooms: 5,
    area: 325,
    price: '1,200,000',
    imgSrc: house5
  },
  {
    name: 'Modern Familiy Apartment',
    location: 'Canada',
    rooms: 3,
    area: 225,
    price: '1,100,000',
    imgSrc: house6
  }
]

export const Homes: React.FC = () => {
  return (
    <section className="homes">
      {cardData.map((item, ind) => (
        <Card {...item} index={ind} key={item.name} />
      ))}
    </section>
  )
}
