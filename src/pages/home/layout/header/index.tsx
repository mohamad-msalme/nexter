import React from 'react'

import './index.scss'
import logo from 'assets/images/logo.png'
import logo1 from 'assets/images/logo-bbc.png'
import logo2 from 'assets/images/logo-bi.png'
import logo3 from 'assets/images/logo-forbes.png'
import logo4 from 'assets/images/logo-techcrunch.png'
import { Button } from 'components/button/Button'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        loading="lazy"
        src={logo}
        alt="Nexter logo"
        className="header__logo"
      />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <Button label="View our properties" />
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img loading="lazy" src={logo1} alt="Seen on logo 1" />
        <img loading="lazy" src={logo2} alt="Seen on logo 2" />
        <img loading="lazy" src={logo3} alt="Seen on logo 3" />
        <img loading="lazy" src={logo4} alt="Seen on logo 4" />
      </div>
    </header>
  )
}
