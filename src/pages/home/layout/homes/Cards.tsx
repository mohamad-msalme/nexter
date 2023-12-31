import React from 'react'
import { TCardData } from '.'
import { MapIcon } from 'components/icons/MapIcon'
import { UserIcon } from 'components/icons/UserIcon'
import { BuildingIcon } from 'components/icons/BuildingIcon'
import { KeyIcon } from 'components/icons/KeyIcon'
import { Button } from 'components/button/Button'
import { HeartIcon } from 'components/icons/HeartIcon'

export const Card: React.FC<TCardData> = ({
  price,
  rooms,
  area,
  location,
  name,
  imgSrc,
  index
}) => (
  <div className="home">
    <img
      loading="lazy"
      src={imgSrc}
      alt={`House ${(index || 0) + 1}`}
      className="home__img"
    />
    <HeartIcon className="home__icon home__icon--heart" />
    <h5 className="home__name">{name}</h5>
    <div className="home__location">
      <MapIcon className="home__icon" />
      <p>{location}</p>
    </div>
    <div className="home__rooms">
      <UserIcon className="home__icon" />
      <p>{rooms}</p>
    </div>
    <div className="home__area">
      <BuildingIcon className="home__icon" />
      <p>
        {`${area} m`}
        <sup>2</sup>
      </p>
    </div>
    <div className="home__price">
      <KeyIcon className="home__icon" />
      <p>{`$${price}`}</p>
    </div>
    <Button label="Contact realtor" className="home__btn" />
  </div>
)
