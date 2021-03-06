import React from 'react'

import styles from '@/styles/about.module.css'
import drivingBobcat from '@/images/bobcat-animated.svg'
import drivingPickupTruck from '@/images/driving-pickup-truck-animated.svg'
import manLoadingTruck from '@/images/trash-man-truck-animated.svg'

const About: React.FC = () => (
  <section className={styles.aboutContainer}>
    <div className={styles.subSection}>
      <p>
        We provide preservation services to mortgage brokers, financial institutions and real estate developers with a focus on special assets.
      </p>
      <img src={manLoadingTruck} alt='image of a man loading a truck' />
    </div>
    <div>
      <p>
        We have been serving Palm Beach, Broward, and Miami Dade counties since 2010.
      </p>
      <img src={drivingPickupTruck} alt='image of man driving a truck' />
    </div>
    <div>
      <p>
        All work is guaranteed with timely project updates, documentation and photos.
      </p>
      <img src={drivingBobcat} alt='an image of a man operating a bobcat grapple bucket' />
    </div>
  </section>
)

export default About