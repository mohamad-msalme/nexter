import React, { ReactNode } from 'react'

export interface CardProps {
  icon: ReactNode
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature">
      {icon}
      <h4 className="heading-4 heading-4--dark">{title}</h4>
      <p className="feature__text">{description}</p>
    </div>
  )
}

export default Card
