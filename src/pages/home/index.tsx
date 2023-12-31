import React from 'react'
import { SideBar } from './layout/sidebar'
import { Relators } from './layout/relators'
import { Features } from './layout/features'
import { StoryContent, StoryPicture } from './layout/story'
import { Gallery } from './layout/gallery'
import { Footer } from './layout/footer'
import { Homes } from './layout/homes'
import { Header } from './layout/header'

export const Home: React.FC = () => (
  <>
    <SideBar />
    <Header />
    <Relators />
    <Features />
    <StoryPicture />
    <StoryContent />
    <Homes />
    <Gallery />
    <Footer />
  </>
)
