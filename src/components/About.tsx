import React from 'react'
import { styled } from '../styles/theme'

import drivingBobcat from '@/images/bobcat-animated.svg'
import drivingPickupTruck from '@/images/driving-pickup-truck-animated.svg'
import manLoadingTruck from '@/images/trash-man-truck-animated.svg'

const SectionComponent = styled.section`
  margin-top: 1rem;

  div {
    display: grid;
    justify-content: center;
    text-align: center;
    margin: auto 2rem;
  }

  img {
    justify-self: center;
  }

  p {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    p:nth-child(2) {
      grid-row: 1;
    }
  }

  @media (min-width: 768px) {
    max-width: 768px;
    justify-self: center;
    grid-gap: 2rem;
    margin: 3rem 0;

    div {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
      margin: 3rem 0;
    }
  }
`

const About: React.FC = () => (
  <SectionComponent>
    <div>
      <p>
        We provide preservation services to mortgage brokers, financial institutions and real estate developers with a focus on special assets.
      </p>
      <img src={manLoadingTruck} alt='image of a man loading a truck' />
    </div>
    <div>
      <img src={drivingPickupTruck} alt='image of man driving a truck' />
      <p>
        We have been serving Palm Beach, Broward, and Miami Dade counties since 2010.
      </p>
    </div>
    <div>
      <p>
        All work is guaranteed with timely project updates, documentation and photos.
      </p>
      <img src={drivingBobcat} alt='an image of a man operating a bobcat grapple bucket' />
    </div>
  </SectionComponent>
)

export default About