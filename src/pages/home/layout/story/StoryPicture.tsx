import React from 'react'

import './index.scss'

import story1 from 'assets/images/story-1.jpeg'
import story2 from 'assets/images/story-2.jpeg'

export const StoryPicture: React.FC = () => {
  return (
    <div className="story__pictures">
      <img
        loading="lazy"
        src={story1}
        alt="Couple with new house"
        className="story__img--1"
      />
      <img
        loading="lazy"
        src={story2}
        alt="New house"
        className="story__img--2"
      />
    </div>
  )
}
