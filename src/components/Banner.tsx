import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import { styled } from '../styles/theme'

const HeaderComponent = styled.header`
  display: grid;
  background: black;
  position: relative;
  color: white;
  display: grid;
  align-items: center;
  overflow: hidden;

  .backgroundImg {
    object-fit: cover;
    opacity: 0.5;

    @media (min-width: 768px) {
      max-width: 1200px;
      justify-self: center;
      width: 100%;
    }
  }

  h1 {
    position: absolute;
    z-index: 10;
    padding-left: 10px;
    color: white;
  }

  @media (min-width: 768px) {
    max-height: 750px;

    h1 {
      font-size: 2.5rem;
      width: 768px;
      justify-self: center;
    }
  }
`

interface Props {
  bgImage: FluidObject
}

class Banner extends React.Component<Props> {
  render() {
    return (
      <HeaderComponent>
        <Img
          fluid={this.props.bgImage}
          alt='Trucks at trash dump'
          className='backgroundImg'
        />
        <h1>
          South Reef Property Preservation Inc.
        </h1>
      </HeaderComponent>
    )
  }
}

export default Banner
