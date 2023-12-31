/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import './index.scss'
import { EarthIcon } from 'components/icons/EarthIcon'
import { BuildingIcon } from 'components/icons/BuildingIcon'
import { MapIcon } from 'components/icons/MapIcon'
import { KeyIcon } from 'components/icons/KeyIcon'
import { ScreenIcon } from 'components/icons/ScreenIcon'
import { LockIcon } from 'components/icons/LockIcon'
import Card, { CardProps } from './Card'

export const cardData: CardProps[] = [
  {
    icon: <EarthIcon className="feature__icon" />,
    description: `World's best luxury homes""Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.`,
    title: `World's best luxury homes`
  },
  {
    icon: <BuildingIcon className="feature__icon" />,
    description: `Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
        rerum sed a eligendi aut quia.`,
    title: `Only the best properties`
  },
  {
    icon: <MapIcon className="feature__icon" />,
    description: `Tenetur distinctio necessitatibus pariatur voluptatibus quidem
    consequatur harum.`,
    title: `All homes in in top locations`
  },
  {
    icon: <KeyIcon className="feature__icon" />,
    description: `Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
    amet consectetur adipisicing elit.`,
    title: `New home in one week`
  },
  {
    icon: <ScreenIcon className="feature__icon" />,
    description: `Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
    necessitatibus pariatur voluptatibus.`,
    title: `Top 1% realtors`
  },
  {
    icon: <LockIcon className="feature__icon" />,
    description: `Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.`,
    title: `Secure payments on nexter`
  }
]

export const Features: React.FC = () => {
  return (
    <section className="features">
      {cardData.map(card => (
        <Card {...card} key={card.title} />
      ))}
    </section>
  )
}
