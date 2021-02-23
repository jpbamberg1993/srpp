import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import styles from '../styles/banner.module.css'

interface Props {
  bgImage: FluidObject
}

class Banner extends React.Component<Props> {
  render() {
    return (
      <header className={styles.header}>
        <Img
          fluid={this.props.bgImage}
          alt='Trucks at trash dump'
          className={styles.backgroundImg}
        />
        <h1 className={styles.textToOverlay}>
          South Reef Property Preservation Inc.
        </h1>
      </header>
    )
  }
}

export default Banner
