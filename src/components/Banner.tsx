import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import bannerStyles from '../styles/banner.module.css'

interface Props {
  bgImage: FluidObject
}

class Banner extends React.Component<Props> {
  render() {
    return (
      <header className={bannerStyles.header}>
        <Img
          fluid={this.props.bgImage}
          alt='Trucks at trash dump'
          className={bannerStyles.backgroundImg}
        />
        <h1 className={bannerStyles.textToOverlay}>
          South Reef Property Preservation Inc.
        </h1>
      </header>
    )
  }
}

export default Banner
