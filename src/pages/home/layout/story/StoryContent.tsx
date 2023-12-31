import React from 'react'

import './index.scss'
import { Button } from 'components/button/Button'

export const StoryContent: React.FC = () => {
  return (
    <div className="story__content">
      <h3 className="heading-3 mb-sm">Happy Customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">
        “The best decision of our lives”
      </h2>
      <p className="story__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </p>
      <Button label="Find your own home" />
    </div>
  )
}
